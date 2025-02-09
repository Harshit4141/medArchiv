import React, { useState } from "react";
import style from '../../Style/PatientCss/PatientDashboard.module.css'
import { useNavigate } from "react-router-dom";

const PatientDashboard = () => {
  const navigate = useNavigate();

  const [patientData, setPatientData] = useState({
    name: "Shiv Kumar",
    email: "shiv14@google.com",
    password: "Kumarshiv456",
    confirmPassword: "Kumarshiv456",
    problemofconcern: "Stomach Pain",
    timeofdays: "4 days",
    phone: "87658564",
    district: "Kanpur",
    state: "Uttar Pradesh",
    country: "India",
    birthday: "1995-01-24",
    age: "35",
    gender: "Male",
    profilePicture: null,
    about: "I am a patient looking for consultation.", // Added an 'about' section
    profession: "Enginer", // Placeholder qualification
    Prescription: "In Medical observation",
  });
  const [isEditingAbout, setIsEditingAbout] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === "about" && value.length > 250) {
      alert("About section can have 250 characters allowed.");
      return;
    }
    setPatientData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleProfilePictureChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPatientData((prevData) => ({ ...prevData, profilePicture: reader.result }));
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className={style.dashboardContainer}>
      <div className={style.topSection}>
        <div className={style.profileSection}>
          <div className={style.profileImage}>
            {patientData.profilePicture ? (
              <img src={patientData.profilePicture} alt="Profile" className={style.uploadedImage} />
            ) : (
              <div className={style.placeholderImage}>Upload Image</div>
            )}
          </div>

          <input type="file" accept="image/*" onChange={handleProfilePictureChange} className={style.uploadButton} />
          <div className={style.profileDetails}>
            <p className={style.profileName}>{patientData.name}</p>
          </div>
          <div className={style.aboutSection}>
            <h3>About</h3>
            {isEditingAbout ? (
              <>
                <textarea
                  name="about"
                  value={patientData.about}
                  onChange={handleInputChange}
                  maxLength="250"
                  className={style.aboutTextarea}
                />
                <p>{250 - patientData.about.length} characters left</p>
                <button onClick={() => setIsEditingAbout(false)} className={style.saveButton}>
                  Save
                </button>
              </>
            ) : (
              <>
                <p>{patientData.about}</p>
                <button onClick={() => setIsEditingAbout(true)} className={style.editAboutButton}>
                  Edit
                </button>
              </>
            )}
          </div>
       </div>
        
        
      </div>
      <div className={style.bottomSection}>
        <div className={style.infoCard}>
          <h3>Personal Info</h3>
          <p><b>Name:</b> {patientData.name}</p>
          <p><b>Email:</b> {patientData.email}</p>
          <p><b>Phone:</b> {patientData.phone}</p>
          <p><b>Birthday:</b> {patientData.birthday}</p>
          <p><b>Age:</b> {patientData.age}</p>
          <p><b>Gender:</b> {patientData.gender}</p>
          <p><b>Profession:</b> {patientData.profession}</p>
          <p><b>District:</b> {patientData.district}</p>
          <p><b>State:</b> {patientData.state}</p>
          <p><b>Country:</b> {patientData.country}</p>
        </div>
        <div className={style.infoCard}>
          <h3>Medical Info</h3>
          <p><b>Problem of Concern:</b> {patientData.problemofconcern}</p>
          <p><b>Duration:</b> {patientData.timeofdays}</p>
          <p><b>Prescription:</b> {patientData.prescription}</p>
        </div>
        <button className={style.editButton} onClick={() => navigate("/edit")}>Edit</button>
      </div>
    </div>
  );
};

export default PatientDashboard;