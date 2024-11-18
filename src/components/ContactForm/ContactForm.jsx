import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './ContactForm.scss';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [showPopup, setShowPopup] = useState(false); // For popup control
  const initialText = "Let's get in touch.";
  const typingSpeed = 100;

  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:3001';

  useEffect(() => {
    let typingInterval;

    if (currentIndex < initialText.length) {
      typingInterval = setInterval(() => {
        setDisplayedText((prevText) => prevText + initialText[currentIndex]);
        setCurrentIndex((prevIndex) => prevIndex + 1);
      }, typingSpeed);
    } else {
      clearInterval(typingInterval);
    }

    return () => {
      clearInterval(typingInterval);
    };
  }, [currentIndex]);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`${API_URL}/submit-form`, formData);
      setShowPopup(true); // Show the popup
      setTimeout(() => setShowPopup(false), 3000); // Hide after 3 seconds
      setFormData({
        name: '',
        email: '',
        message: '',
      });
    } catch (error) {
      console.error(error);
      alert('Error submitting form');
    }
  };

  return (
    <section className="p-5 bg-yellow py-5 contact-form">
      <div className="container">
        <form onSubmit={handleSubmit} className="form">
          <div className="row justify-content-center my-5 py-2 align-items-center">
            <div className="col-md-5">
              <h2 className="display-3">{displayedText}</h2>
            
            </div>
            <div className="col-md-5">
              <div className="mb-3">
                <input
                  className="form-control"
                  type="text"
                  name="name"
                  id="name"
                  placeholder="First and Last Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-3">
                <input
                  className="form-control"
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-3">
                <textarea
                  className="form-control"
                  name="message"
                  id="message"
                  placeholder="Message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  required
                ></textarea>
              </div>
              <div className="d-grid">
                <button
                  type="submit"
                  className="btn bg-teal text-white fw-bold btn-lg text-uppercase rounded-4"
                >
                  Send
                </button>
              </div>
            </div>
          </div>
        </form>

        {showPopup && (
          <div className="popup-message text-center text-secondary">
            Form submitted successfully!
          </div>
        )}
      </div>
    </section>
  );
}
