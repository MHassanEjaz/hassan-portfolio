import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { FaArrowLeft, FaCheck, FaShoppingCart, FaArrowRight } from 'react-icons/fa';
import { useCart } from '../context/CartContext';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './App.css';

const ServiceDetail = () => {
  const { id } = useParams();
  const { addToCart } = useCart();
  
  const service = {
    id: parseInt(id),
    title: 'Website Development',
    description: 'Visually appealing and functional websites to enhance user experience and engagement.',
    price: 999,
    fullDescription: 'Full-stack website development using modern technologies like React, Node.js, MongoDB. Responsive design, SEO optimization, and performance tuning. I create custom solutions that are scalable, maintainable, and perfectly aligned with your business goals.',
    features: ['Responsive Design', 'SEO Friendly', 'Fast Loading', 'Mobile First', 'Cross Browser', 'Security', 'Analytics'],
    timeline: '2-4 weeks',
    deliverables: ['Design Mockups', 'Source Code', 'Documentation', 'Deployment', 'Training']
  };

  const recentProjects = [
    { id: 1, title: 'E-commerce Platform', image: '/project1.jpg', description: 'Full-featured online store' },
    { id: 2, title: 'Business Dashboard', image: '/project2.jpg', description: 'Analytics dashboard for startups' },
    { id: 3, title: 'Portfolio Website', image: '/project3.jpg', description: 'Creative portfolio for designer' },
    { id: 4, title: 'Booking System', image: '/project4.jpg', description: 'Appointment booking platform' },
    { id: 5, title: 'Learning Platform', image: '/project5.jpg', description: 'Online course marketplace' },
  ];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };

  return (
    <div className="service-detail">
      <div className="container">
        <Link to="/services" className="back-btn">
          <FaArrowLeft /> Back to Services
        </Link>

        <div className="service-detail-header">
          <h1>{service.title}</h1>
          <p className="service-intro">{service.description}</p>
        </div>

        <div className="service-detail-content">
          <div className="service-main">
            <div className="service-overview">
              <h2>Service Overview</h2>
              <p>{service.fullDescription}</p>
            </div>

            <div className="service-features">
              <h2>Key Features</h2>
              <ul>
                {service.features.map((feature, index) => (
                  <li key={index}>
                    <FaCheck /> {feature}
                  </li>
                ))}
              </ul>
            </div>

            <div className="service-info-grid">
              <div className="info-card">
                <h3>Timeline</h3>
                <p>{service.timeline}</p>
              </div>
              <div className="info-card">
                <h3>Price</h3>
                <p className="price">${service.price}</p>
              </div>
              <div className="info-card">
                <h3>Delivery</h3>
                <ul>
                  {service.deliverables.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="cta-section">
              <button 
                className="add-to-cart-btn"
                onClick={() => addToCart(service)}
              >
                <FaShoppingCart /> Add to Cart
              </button>
              <Link to="/contact" className="contact-btn">
                Contact Me
              </Link>
            </div>
          </div>
        </div>

        <div className="recent-projects">
          <h2>Recent Projects</h2>
          <p className="section-subtitle">See examples of my recent work in this category</p>
          
          <Slider {...sliderSettings}>
            {recentProjects.map(project => (
              <div key={project.id} className="project-slide">
                <div className="project-image">
                  <img src={project.image} alt={project.title} />
                  <div className="project-overlay">
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                    <Link to={`/projects/${project.id}`} className="view-project">
                      View Project <FaArrowRight />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetail;