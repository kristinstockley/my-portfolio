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
      <div onClick={openModal} className="nav-link">
        Resume
      </div>
      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <span onClick={closeModal} className="close-button">
              &times;
            </span>
            <iframe
              title="Resume"
              src="/assets/images/Kristin Stockley-Resume.pdf"
              width="100%"
              height="600px"
            />
          </div>
        </div>
      )}
    </div>
  );
}
