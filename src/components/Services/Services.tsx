import React, { useState } from "react";
import "../Services/services.css";
const Services = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="service--container">
      <h3>Services</h3>
      <button
        type="button"
        className="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
        onClick={() => setShowModal(!showModal)}
      >
        Launch demo modal
      </button>

      {showModal && (
        <div className="modal--container">
          <h2>I'm a modal</h2>
          <button
            type="button"
            className="btn-close"
            aria-label="Close"
            onClick={() => setShowModal(false)}
          ></button>
        </div>
      )}
    </div>
  );
};

export default Services;
