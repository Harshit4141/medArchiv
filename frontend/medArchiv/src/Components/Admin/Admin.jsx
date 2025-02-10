import React, { useState } from "react";
import style from '../../Style/AdminCss/Admin.module.css'

const initialRequests = [
  { id: 1, name: "Dr. Priya Soni", specialization: "Cardiologist", status: "Pending" },
  { id: 2, name: "Dr. Joyti Dubey", specialization: "Dermatologist", status: "Pending" },
  { id: 3, name: "Dr. Gauri Taneja", specialization: "Neurologist", status: "Pending" },
];

const Admin = () => {
  const [requests, setRequests] = useState(initialRequests);

  const handleStatusChange = (id, newStatus) => {
    setRequests((prevRequests) =>
      prevRequests.map((req) => (req.id === id ? { ...req, status: newStatus } : req))
    );
  };

  return (
    <div className={style.container}>
      <h1 className={style.title}>Doctor Approval Requests</h1>
      <table className={style.table}>
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
                <span className={style[request.status]} id={style.status}>{request.status}</span>
              </td>
              <td>
                {request.status === "Pending" && (
                  <div className={style.actions}>
                    <button onClick={() => handleStatusChange(request.id, "Approved")} className={style.button} id={style.approve}>
                      Approve
                    </button>
                    <button onClick={() => handleStatusChange(request.id, "Rejected")} className={style.button} id={style.reject}>
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

export default Admin;