import React, { useState } from 'react';
import { FaShoppingCart, FaHeart, FaArrowRight, FaLaptop, FaRobot, FaCogs, FaMicrophone, FaCode } from 'react-icons/fa';
import { useCart } from './CartContext';

const servicesData = [
  {
    id: 1,
    title: 'Website Development',
    description: 'Visually appealing and functional websites to enhance user experience and engagement.',
    icon: <FaLaptop />,
    image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    price: 999,
    details: 'Full-stack website development using modern technologies like React, Node.js, MongoDB.',
    features: ['Responsive Design', 'SEO Friendly', 'Fast Loading', 'Mobile First', 'Cross Browser']
  },
  {
    id: 2,
    title: 'Chatbot Development',
    description: 'Developing intelligent AI chatbots for customer service and business automation.',
    icon: <FaRobot />,
    image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    price: 1499,
    details: 'AI-powered chatbots with natural language processing and custom training.',
    features: ['AI Powered', '24/7 Support', 'Multi-language', 'Analytics', 'Integration']
  },
  {
    id: 3,
    title: 'N8N Automation',
    description: 'Building automated workflows and integrations to streamline your business processes.',
    icon: <FaCogs />,
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    price: 799,
    details: 'Set up automated workflows using N8N to connect different apps and services.',
    features: ['Workflow Automation', 'API Integration', 'Scheduled Tasks', 'Error Handling', 'Monitoring']
  },
  {
    id: 4,
    title: 'AI Integration',
    description: 'Integrating artificial intelligence features into your existing applications.',
    icon: <FaRobot />,
    image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    price: 1299,
    details: 'Add AI capabilities like image recognition and natural language processing.',
    features: ['Machine Learning', 'Image Processing', 'Predictive Analytics', 'Custom Models', 'Real-time']
  },
  {
    id: 5,
    title: 'AI Voice Over',
    description: 'High-quality AI voice generation for videos, podcasts, and presentations.',
    icon: <FaMicrophone />,
    image: 'https://images.unsplash.com/photo-1589256469067-ea99122bbdc4?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    price: 299,
    details: 'Generate natural-sounding voiceovers in multiple languages and accents.',
    features: ['Natural Voices', 'Multiple Languages', 'Custom Accents', 'Emotion Control', 'High Quality']
  },
  {
    id: 6,
    title: 'Custom Web Apps',
    description: 'Tailored web applications designed to solve specific business problems.',
    icon: <FaCode />,
    image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    price: 1999,
    details: 'Completely custom web applications built from scratch.',
    features: ['Custom Design', 'Scalable Architecture', 'User Management', 'Payment Integration', 'Analytics']
  }
];

const Services = () => {
  const { addToCart, toggleCart } = useCart();
  const [favorites, setFavorites] = useState([]);
  const [addedService, setAddedService] = useState(null);

  const toggleFavorite = (serviceId) => {
    if (favorites.includes(serviceId)) {
      setFavorites(favorites.filter(id => id !== serviceId));
    } else {
      setFavorites([...favorites, serviceId]);
    }
  };

  const showServiceDetail = (serviceId) => {
    const service = servicesData.find(s => s.id === serviceId);
    if (service) {
      alert(`${service.title}\n\n${service.details}\n\nFeatures:\n• ${service.features.join('\n• ')}`);
    }
  };

  const handleAddToCart = (service) => {
    addToCart(service);
    setAddedService(service.title);
    
    
    setTimeout(() => setAddedService(null), 2000);
  };

  return (
    <section className="services" id="services">
      {/* Success notification */}
      {addedService && (
        <div className="cart-notification">
          ✓ {addedService} added to cart!
        </div>
      )}

      <div className="container">
        <div className="services-header">
          <p className="services-sub">What I offer</p>
          <h2 className="services-title">My Services</h2>
          <p className="services-description">
            I build websites, SaaS apps, and custom web apps to help you achieve your goals.
          </p>
        </div>

        <div className="services-grid">
          {servicesData.map((service) => (
            <div key={service.id} className="service-card">
              <div className="service-image">
                <img src={service.image} alt={service.title} />
                <button 
                  className="favorite-btn"
                  onClick={() => toggleFavorite(service.id)}
                >
                  <FaHeart className={favorites.includes(service.id) ? 'favorited' : ''} />
                </button>
              </div>
              
              <div className="service-content">
                <div className="service-icon">{service.icon}</div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                
                <div className="service-price">
                  <span className="price">${service.price}</span>
                  <span className="duration">/project</span>
                </div>

                <div className="service-actions">
                  <button 
                    className="learn-more-btn"
                    onClick={() => showServiceDetail(service.id)}
                  >
                    Learn More <FaArrowRight />
                  </button>
                  <button 
                    className="add-to-cart-btn"
                    onClick={() => handleAddToCart(service)}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Removed the View Cart button since cart is now accessible from navbar */}
      </div>
    </section>
  );
};

export default Services;