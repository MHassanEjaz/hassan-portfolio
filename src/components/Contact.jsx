// src/components/Contact.jsx
import React, { useState } from 'react';
import { 
  FaEnvelope, 
  FaPhone, 
  FaMapMarkerAlt, 
  FaClock,
  FaUser,
  FaPaperPlane,
  FaCheckCircle,
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaInstagram,
  FaFacebook,
  FaYoutube
} from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [formStatus, setFormStatus] = useState({
    submitted: false,
    loading: false,
    success: false,
    error: null
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus({ submitted: true, loading: true, success: false, error: null });

    // Simulate sending email (replace with actual API call)
    setTimeout(() => {
      setFormStatus({
        submitted: true,
        loading: false,
        success: true,
        error: null
      });
      
      // Reset form after success
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });

      // Reset success message after 5 seconds
      setTimeout(() => {
        setFormStatus({
          submitted: false,
          loading: false,
          success: false,
          error: null
        });
      }, 5000);
    }, 1500);
  };

  const contactInfo = [
    {
      icon: <FaEnvelope />,
      title: 'Email',
      info: 'muhammadhassannn9@gmail.com',
      action: 'mailto:hello@mhassan.dev',
      color: '#667eea'
    },
    {
      icon: <FaPhone />,
      title: 'Phone',
      info: '+92 307-4402475',
      action: 'tel:+12345678900',
      color: '#51cf66'
    },
    {
      icon: <FaMapMarkerAlt />,
      title: 'Location',
      info: 'Lahore, Pakistan',
      action: '#',
      color: '#ff6b6b'
    },
    {
      icon: <FaClock />,
      title: 'Working Hours',
      info: 'Mon-Fri: 9AM - 6PM',
      action: '#',
      color: '#ffa502'
    }
  ];

  const socialLinks = [
    { icon: <FaGithub />, url: 'https://github.com/MHassanEjaz', label: 'GitHub' },
    { icon: <FaLinkedin />, url: 'https://www.linkedin.com/in/muhammad-hassanofficial/', label: 'LinkedIn' },
    { icon: <FaTwitter />, url: 'https://twitter.com', label: 'Twitter' },
    { icon: <FaInstagram />, url: 'https://instagram.com', label: 'Instagram' },
    { icon: <FaFacebook />, url: 'https://facebook.com', label: 'Facebook' },
    { icon: <FaYoutube />, url: 'https://youtube.com', label: 'YouTube' }
  ];

  return (
    <section className="contact-section" id="contact">
      <div className="container">
        {/* Section Header */}
        <div className="contact-header">
          <p className="contact-subtitle">Get In Touch</p>
          <h2 className="contact-title">Let's Work Together</h2>
          <p className="contact-description">
            Have a project in mind or want to collaborate? I'd love to hear from you. 
            Fill out the form below and I'll get back to you as soon as possible.
          </p>
        </div>

        {/* Contact Content */}
        <div className="contact-content">
          {/* Contact Info Cards */}
          <div className="contact-info-section">
            {contactInfo.map((item, index) => (
              <a 
                key={index} 
                href={item.action} 
                className="contact-info-card"
                style={{ '--card-color': item.color }}
              >
                <div className="info-icon">
                  {item.icon}
                </div>
                <div className="info-content">
                  <h4>{item.title}</h4>
                  <p>{item.info}</p>
                </div>
              </a>
            ))}
          </div>

          {/* Contact Form */}
          <div className="contact-form-section">
            <div className="form-wrapper">
              <h3 className="form-title">Send Me a Message</h3>
              
              {formStatus.success && (
                <div className="form-success">
                  <FaCheckCircle className="success-icon" />
                  <p>Thank you! Your message has been sent successfully.</p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-group">
                  <label htmlFor="name">
                    <FaUser className="input-icon" />
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    required
                    className="form-input"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">
                    <FaEnvelope className="input-icon" />
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    required
                    className="form-input"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="subject">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Project Inquiry"
                    required
                    className="form-input"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project..."
                    required
                    className="form-textarea"
                    rows="5"
                  />
                </div>

                <button 
                  type="submit" 
                  className="submit-btn"
                  disabled={formStatus.loading}
                >
                  {formStatus.loading ? (
                    <>
                      <span className="spinner"></span>
                      Sending...
                    </>
                  ) : (
                    <>
                      <FaPaperPlane />
                      Send Message
                    </>
                  )}
                </button>
              </form>

              {/* Social Links */}
              <div className="social-links-section">
                <p className="social-label">Or connect with me on social media</p>
                <div className="social-links">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="social-link"
                      aria-label={social.label}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;