import React, { useState } from "react";
import style from '../Style/OthersCss/DRegistration.module.css'
function DRegistration() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    areaOfPractice: "",
    experience: "",
    qualification: "",
    phone: "",
    state: "",
    birthday: "",
    gender: "Male",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleGenderChange = (e) => {
    setFormData({ ...formData, gender: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    console.log("Doctor Registered:", formData);
    alert("Doctor Registered Successfully!");
  };

  return (
    <div className={style.registrationContainer}>
      <div className={style.registrationCard}>
        <h2 className={style.registrationTitle}>Doctor Registration</h2>
        
        <form onSubmit={handleSubmit}>
          <div className={style.formGroup}>
            <p>Name:</p>
            <input type="text" name="name" value={formData.name} onChange={handleChange} required />
          </div>

          <div className={style.formGroup}>
            <p>Email:</p>
            <input type="email" name="email" value={formData.email} onChange={handleChange} required />
          </div>

          <div className={style.formGroup}>
            <p>Password:</p>
            <input type="password" name="password" value={formData.password} onChange={handleChange} required />
          </div>

          <div className={style.formGroup}>
            <p>Confirm Password:</p>
            <input type="password" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} required />
          </div>

          <div className={style.formGroup}>
            <p>Area of Practice:</p>
            <input type="text" name="areaOfPractice" value={formData.areaOfPractice} onChange={handleChange} required />
          </div>

          <div className={style.formGroup}>
            <p>Experience:</p>
            <input type="text" name="experience" value={formData.experience} onChange={handleChange} required />
          </div>

          <div className={style.formGroup}>
            <p>Qualification:</p>
            <input type="text" name="qualification" value={formData.qualification} onChange={handleChange} required />
          </div>

          <div className={style.formGroup}>
            <p>Phone:</p>
            <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required />
          </div>

          <div className={style.formGroup}>
            <p>State:</p>
            <input type="text" name="state" value={formData.state} onChange={handleChange} required />
          </div>

          <div className={style.formGroup}>
            <p>Birthday:</p>
            <input type="date" name="birthday" value={formData.birthday} onChange={handleChange} required />
          </div>

          <div className={style.formGroup}>
            <p>Gender:</p>
            <div className={style.genderOptions}>
              <label>
                <input type="radio" name="gender" value="Male" checked={formData.gender === "Male"} onChange={handleGenderChange} />
                Male
              </label>
              <label>
                <input type="radio" name="gender" value="Female" checked={formData.gender === "Female"} onChange={handleGenderChange} />
                Female
              </label>
              <label>
                <input type="radio" name="gender" value="Other" checked={formData.gender === "Other"} onChange={handleGenderChange} />
                Other
              </label>
            </div>
          </div>

          <button type="submit" className={style.registerButton}>Register</button>
        </form>
      </div>
    </div>
  );
}

export default DRegistration;
