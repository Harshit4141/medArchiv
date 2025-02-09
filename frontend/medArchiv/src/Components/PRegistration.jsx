import React, { useState } from "react";
import style from '../Style/OthersCss/PRegistration.module.css'
function PRegistration() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    phone: "",
    birthDate: "",
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
    console.log("Patient Registered:", formData);
    alert("Patient Registered Successfully!");
  };

  return (
    <div className={style.registrationContainer}>
      <div className={style.registrationCard}>
        <h2 className={style.registrationTitle}>Patient Registration</h2>

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
            <p>Phone Number:</p>
            <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required />
          </div>

          <div className={style.formGroup}>
            <p>Date of Birth:</p>
            <input type="date" name="birthDate" value={formData.birthDate} onChange={handleChange} required />
          </div>

          <div className={style.formGroup}>
            <p>Gender:</p>
            <div className={style.genderGptions}>
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

export default PRegistration;
