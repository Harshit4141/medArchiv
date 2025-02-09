import React, { useState } from "react";
import "./AdminPanel.css";

const initialRequests = [
  { id: 1, name: "Dr. Priya Soni", specialization: "Cardiologist", status: "Pending" },
  { id: 2, name: "Dr. Joyti Dubey", specialization: "Dermatologist", status: "Pending" },
  { id: 3, name: "Dr. Gauri Taneja", specialization: "Neurologist", status: "Pending" },
];

const AdminDoctorApproval = () => {
  const [requests, setRequests] = useState(initialRequests);

  const handleStatusChange = (id, newStatus) => {
    setRequests((prevRequests) =>
      prevRequests.map((req) => (req.id === id ? { ...req, status: newStatus } : req))
    );
  };

  return (
    <div className="container">
      <h1 className="title">Doctor Approval Requests</h1>
      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Specialization</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {requests.map((request) => (
            <tr key={request.id}>
              <td>{request.name}</td>
              <td>{request.specialization}</td>
              <td>
                <span className={`status ${request.status.toLowerCase()}`}>{request.status}</span>
              </td>
              <td>
                {request.status === "Pending" && (
                  <div className="actions">
                    <button onClick={() => handleStatusChange(request.id, "Approved")} className="button approve">
                      Approve
                    </button>
                    <button onClick={() => handleStatusChange(request.id, "Rejected")} className="button reject">
                      Reject
                    </button>
                  </div>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminDoctorApproval;
