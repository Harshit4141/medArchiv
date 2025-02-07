import React from "react";
import './PatientDashboard.css';

const PatientDashboard = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Patient Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="border rounded-lg p-4 shadow-md">
          <h2 className="text-xl font-semibold">Appointments</h2>
          <p>View and manage your appointments.</p>
          <button className="mt-2 bg-blue-500 text-white py-2 px-4 rounded">View Appointments</button>
        </div>
        <div className="border rounded-lg p-4 shadow-md">
          <h2 className="text-xl font-semibold">Medical Records</h2>
          <p>Access your medical history and reports.</p>
          <button className="mt-2 bg-blue-500 text-white py-2 px-4 rounded">View Records</button>
        </div>
        <div className="border rounded-lg p-4 shadow-md">
          <h2 className="text-xl font-semibold">Prescriptions</h2>
          <p>Check your prescribed medications.</p>
          <button className="mt-2 bg-blue-500 text-white py-2 px-4 rounded">View Prescriptions</button>
        </div>
      </div>
    </div>
  );
};

export default PatientDashboard;


