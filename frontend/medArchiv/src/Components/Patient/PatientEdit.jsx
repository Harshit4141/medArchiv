import React, { useState } from "react";
import './PatientDashboardEdit.css'

const PatientDashboardEdit = () => {
  const [patientInfo, setPatientInfo] = useState({
    age: "",
    gender: "",
    height: "",
    weight: "",
    bloodGroup: "",
    bloodPressure: "",
    diabetes: "",
    allergies: "",
    disease: "",
    kidneyProblem: "",
    heartProblem: "",
    drugUse: "",
    anxietyAttack: "",
    breathingProblem: "",
    stroke: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPatientInfo((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Updated Patient Information:", patientInfo);
  };

  return (
    <div className="container">
      <h1 className="title">Edit Patient Information</h1>
      <form onSubmit={handleSubmit} className="form">
        <div className="form-group">
          <label>Age:</label>
          <input type="number" name="age" value={patientInfo.age} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Gender:</label>
          <select name="gender" value={patientInfo.gender} onChange={handleChange} required>
            <option value="">Select</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
        </div>
        <div className="form-group">
          <label>Height (cm):</label>
          <input type="number" name="height" value={patientInfo.height} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Weight (kg):</label>
          <input type="number" name="weight" value={patientInfo.weight} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Blood Group:</label>
          <input type="text" name="bloodGroup" value={patientInfo.bloodGroup} onChange={handleChange} required />
        </div>
        <br /> <br />
        <h2 className="subtitle">More Information</h2>
        {[
          "bloodPressure",
          "diabetes",
          "allergies",
          "disease",
          "kidneyProblem",
          "heartProblem",
          "drugUse",
          "anxietyAttack",
          "breathingProblem",
          "stroke",
        ].map((field) => (
          <div className="form-group" key={field}>
            <label>{field.replace(/([A-Z])/g, " $1").trim()}:</label>
            <input type="text" name={field} value={patientInfo[field]} onChange={handleChange} />
          </div>
        ))}
        <button type="submit" className="button submit">Save</button>
      </form>
    </div>
  );
};

export default PatientDashboardEdit;
