import React, { useState } from 'react';
import './ContactForm.css';

const ContactForm = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [errors, setErrors] = useState({});
  const [submissionStatus, setSubmissionStatus] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateForm = () => {
    const formErrors = {};
    if (!formData.name) formErrors.name = 'Name is required';
    if (!formData.email) formErrors.email = 'Email is required';
    if (!formData.message) formErrors.message = 'Message is required';
    return formErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formErrors = validateForm();

    if (Object.keys(formErrors).length === 0) {
      setErrors({});
      setSubmissionStatus('Sending...');

      try {
        const response = await fetch('http://localhost:5001/send', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });

        const result = await response.json();
        if (result.success) {
          setSubmissionStatus('Email sent successfully');
          setIsSubmitted(true);
        } else {
          setSubmissionStatus(result.message || 'Failed to send email');
        }
      } catch (error) {
        console.error('Error:', error);
        setSubmissionStatus('Error occurred. Please try again.');
      }
    } else {
      setErrors(formErrors);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div className="contact-form-container">
      <form onSubmit={handleSubmit} className={isSubmitted ? 'disabled-form' : ''}>
        <div className="formItem">
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder=" "
            required
            disabled={isSubmitted}
          />
          <label htmlFor="name">Name *</label>
          {errors.name && <span className="error">{errors.name}</span>}
        </div>

        <div className="formItem">
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder=" "
            required
            disabled={isSubmitted}
          />
          <label htmlFor="email">Email *</label>
          {errors.email && <span className="error">{errors.email}</span>}
        </div>

        <div className="formItem">
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            placeholder=" "
            disabled={isSubmitted}
          />
          <label htmlFor="subject">Subject *</label>
        </div>

        <div className="formItem">
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder=" "
            maxLength="256"
            required
            disabled={isSubmitted}
          />
          <label htmlFor="message">Message *</label>
          {errors.message && <span className="error">{errors.message}</span>}
        </div>

        <div className="button-container">
          <button type="submit" disabled={isSubmitted}>Send</button>
          <button type="reset" onClick={() => setFormData({ name: '', email: '', subject: '', message: '' })} disabled={isSubmitted}>Clear</button>
        </div>
      </form>

      {submissionStatus && (
        <p className={`submission-status ${isSubmitted ? 'success' : 'error'}`}>
          {submissionStatus}
        </p>
      )}
    </div>
  );
};

export default ContactForm;
