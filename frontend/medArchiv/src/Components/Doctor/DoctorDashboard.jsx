import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import style from '../../Style/DoctorCss/DoctorDashboard.module.css'
const DoctorDashboard = () => {
  const navigate = useNavigate();

  const [doctorData, setDoctorData] = useState({
    name: "Dr. Ram Mohan",
    email: "ram12@google.com",
    password: "password123",
    confirmPassword: "password123",
    areaOfPractice: "Surgery",
    experience: "5 years",
    qualification: "MBBS, MD",
    phone: "87658564",
    district: "Ranchi",
    state: "Jharkhand",
    country: "India",
    birthday: "1990-01-11",
    age: "35",
    gender: "Male",
    about: "Working at AIMS Delhi from 2020.",
    profilePicture: null,
  });

  const [isEditingAbout, setIsEditingAbout] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === "about" && value.length > 250) {
      alert("About section can have 250 characters allowed.");
      return;
    }
    setDoctorData({ ...doctorData, [name]: value });
  };

  const handleProfilePictureChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setDoctorData({ ...doctorData, profilePicture: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className={style.dashboardContainer}>
      <div className={style.topSection}>
        <div className={style.profileSection}>
          
          <div className={style.profileImage}>
            {doctorData.profilePicture ? (
              <img src={doctorData.profilePicture} alt="Profile" className={style.uploadedImage} />
            ) : (
              <div className={style.placeholderImage}>Upload Image</div>
            )}
          </div>

          <input
            type="file"
            accept="image/*"
            onChange={handleProfilePictureChange}
            className={style.uploadButton}
          />
          <div className={style.profileDetails}>
            <p className={style.profileName}>{doctorData.name}</p>
            <p className={style.profileQualification}>{doctorData.qualification}</p>
          </div>
          <div className={style.aboutDr}>
            <h3>About Dr</h3>
            {isEditingAbout ? (
              <>
                <textarea
                  name="about"
                  value={doctorData.about}
                  onChange={handleInputChange}
                  maxLength="250"
                  className={style.aboutTextarea}
                />
                <p>{250 - doctorData.about.length} characters left</p>
                <button onClick={() => setIsEditingAbout(false)} className={style.saveButton}>
                  Save
                </button>
              </>
            ) : (
              <>
                <p>{doctorData.about}</p>
                <button onClick={() => setIsEditingAbout(true)} className={style.editAboutButton}>
                  Edit
                </button>
              </>
            )}
          </div>
        </div>
        <div className={style.infoBox}>Patient Count: 60</div>
        <div className={style.infoBox}>Appointment Count: 10</div>
      </div>
      <div className={style.bottomSection}>
        <div className={style.infoCard}>
          <h3>Personal Info</h3>
          <p><b>Name:</b> {doctorData.name}</p>
          <p><b>Email:</b> {doctorData.email}</p>
          <p><b>Phone:</b> {doctorData.phone}</p>
          <p><b>Birthday:</b> {doctorData.birthday}</p>
          <p><b>Age:</b> {doctorData.age}</p>
          <p><b>Gender:</b> {doctorData.gender}</p>
        </div>
        <div className={style.infoCard}>
          <h3>Professional Info</h3>
          <p><b>Area of Practice:</b> {doctorData.areaOfPractice}</p>
          <p><b>Experience:</b> {doctorData.experience}</p>
          <p><b>Qualification:</b> {doctorData.qualification}</p>
          <p><b>District:</b> {doctorData.district}</p>
          <p><b>State:</b> {doctorData.state}</p>
          <p><b>Country:</b> {doctorData.country}</p>
        </div>
        <button className={style.editButton} onClick={() => navigate("/edit")}>Edit</button>
      </div>
    </div>
  );
};

export default DoctorDashboard;
