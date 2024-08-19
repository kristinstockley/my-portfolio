import React, { useState } from 'react';
import './ResumeModal.scss';

export default function ResumeModal () {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div>

      <button className="btn btn-outline-dark px-4 py-3 mx-5" onClick={openModal}>
            <div className="d-inline-block bi bi-download me-2"></div>
            View Resume
          </button>
      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <span onClick={closeModal} className="close-button">
              &times;
            </span>
            <iframe
              title="Resume"
              src="/assets/images/Kristin Stockley - Resume.pdf"
              width="100%"
              height="600px"
            />
          </div>
        </div>
      )}
    </div>
  );
}

