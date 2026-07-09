// import React, { useState, useEffect } from 'react';
// import { 
//   FaFacebookF, 
//   FaTwitter, 
//   FaInstagram, 
//   FaLinkedinIn, 
//   FaGithub, 
//   FaDribbble, 
//   FaBehance,
//   FaArrowUp,
//   FaHeart,
//   FaEnvelope,
//   FaPhone,
//   FaMapMarkerAlt
// } from 'react-icons/fa';
// import { SiUpwork, SiFiverr } from 'react-icons/si';

// const Footer = () => {
//   const [showScroll, setShowScroll] = useState(false);
//   const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

//   useEffect(() => {
//     const checkScroll = () => {
//       if (!showScroll && window.pageYOffset > 400) {
//         setShowScroll(true);
//       } else if (showScroll && window.pageYOffset <= 400) {
//         setShowScroll(false);
//       }
//     };

//     window.addEventListener('scroll', checkScroll);
//     return () => window.removeEventListener('scroll', checkScroll);
//   }, [showScroll]);

//   const scrollToTop = () => {
//     window.scrollTo({
//       top: 0,
//       behavior: 'smooth'
//     });
//   };

//   const socialLinks = [
//     { icon: <FaGithub />, href: 'https://github.com', color: '#333', label: 'GitHub' },
//     { icon: <FaLinkedinIn />, href: 'https://linkedin.com', color: '#0077B5', label: 'LinkedIn' },
//     { icon: <FaTwitter />, href: 'https://twitter.com', color: '#1DA1F2', label: 'Twitter' },
//     { icon: <FaInstagram />, href: 'https://instagram.com', color: '#E4405F', label: 'Instagram' },
//     { icon: <FaFacebookF />, href: 'https://facebook.com', color: '#1877F2', label: 'Facebook' },
//     { icon: <FaDribbble />, href: 'https://dribbble.com', color: '#EA4C89', label: 'Dribbble' },
//     { icon: <FaBehance />, href: 'https://behance.net', color: '#1769FF', label: 'Behance' },
//     { icon: <SiUpwork />, href: 'https://upwork.com', color: '#14A800', label: 'Upwork' },
//     { icon: <SiFiverr />, href: 'https://fiverr.com', color: '#1DBF73', label: 'Fiverr' },
//   ];

//   const quickLinks = [
//     { name: 'Home', href: '#home' },
//     { name: 'About', href: '#about' },
//     { name: 'Services', href: '#services' },
//     { name: 'Projects', href: '#projects' },
//     { name: 'Testimonials', href: '#testimonials' },
//     { name: 'Contact', href: '#contact' }
//   ];

//   const servicesLinks = [
//     { name: 'Web Development', href: '#services' },
//     { name: 'AI Chatbots', href: '#services' },
//     { name: 'Automation', href: '#services' },
//     { name: 'AI Integration', href: '#services' },
//     { name: 'UI/UX Design', href: '#services' },
//     { name: 'Consultation', href: '#services' }
//   ];

//   const contactInfo = [
//     { icon: <FaEnvelope />, text: 'hassanejaz2216@gmail.com', href: 'mailto:hello@mhassan.dev' },
//     { icon: <FaPhone />, text: '0307-4402475', href: 'tel:+12345678900' },
//     { icon: <FaMapMarkerAlt />, text: 'Lahore, Pakistan', href: '#' }
//   ];

//   return (
//     <footer className="footer">
//       {/* Scroll to Top Button */}
//       {showScroll && (
//         <button 
//           className="scroll-to-top"
//           onClick={scrollToTop}
//           aria-label="Scroll to top"
//         >
//           <FaArrowUp />
//         </button>
//       )}

//       <div className="footer-content">
//         <div className="container">
//           <div className="footer-grid">
//             {/* Brand Column */}
//             <div className="footer-column brand-column">
//               <div className="footer-logo" onClick={scrollToTop}>
//                 M Hassan<span className="logo-dot">.</span>
//               </div>
//               <p className="footer-tagline">
//                 Creating digital experiences that inspire and convert. 
//                 Let's build something amazing together.
//               </p>
//               <div className="social-icons">
//                 {socialLinks.map((social, index) => (
//                   <a
//                     key={index}
//                     href={social.href}
//                     className="social-icon"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     aria-label={social.label}
//                     style={{ '--icon-color': social.color }}
//                   >
//                     {social.icon}
//                   </a>
//                 ))}
//               </div>
//             </div>

//             {/* Quick Links Column */}
//             <div className="footer-column">
//               <h3 className="footer-heading">Quick Links</h3>
//               <ul className="footer-links">
//                 {quickLinks.map((link, index) => (
//                   <li key={index}>
//                     <a 
//                       href={link.href}
//                       className="footer-link"
//                     >
//                       <span className="link-bullet">›</span>
//                       {link.name}
//                     </a>
//                   </li>
//                 ))}
//               </ul>
//             </div>

//             {/* Services Column */}
//             <div className="footer-column">
//               <h3 className="footer-heading">Services</h3>
//               <ul className="footer-links">
//                 {servicesLinks.map((service, index) => (
//                   <li key={index}>
//                     <a 
//                       href={service.href}
//                       className="footer-link"
//                     >
//                       <span className="link-bullet">›</span>
//                       {service.name}
//                     </a>
//                   </li>
//                 ))}
//               </ul>
//             </div>

//             {/* Contact Column */}
//             <div className="footer-column">
//               <h3 className="footer-heading">Get In Touch</h3>
//               <ul className="contact-info">
//                 {contactInfo.map((info, index) => (
//                   <li key={index}>
//                     <a 
//                       href={info.href}
//                       className="contact-item"
//                     >
//                       <span className="contact-icon">{info.icon}</span>
//                       <span>{info.text}</span>
//                     </a>
//                   </li>
//                 ))}
//               </ul>
              
//               {/* Newsletter */}
//               <div className="newsletter">
//                 <p className="newsletter-text">Subscribe to my newsletter</p>
//                 <form className="newsletter-form">
//                   <input 
//                     type="email" 
//                     placeholder="Your email address" 
//                     className="newsletter-input"
//                     required
//                   />
//                   <button type="submit" className="newsletter-btn">
//                     Subscribe
//                   </button>
//                 </form>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Footer Bottom */}
//       <div className="footer-bottom">
//         <div className="container">
//           <div className="footer-bottom-content">
//             <p className="copyright">
//               © {currentYear} M Hassan. All rights reserved. 
//               Made with <FaHeart className="heart-icon" /> by M Hassan
//             </p>
//             <div className="footer-bottom-links">
//               <a href="/privacy">Privacy Policy</a>
//               <span className="divider">•</span>
//               <a href="/terms">Terms of Service</a>
//               <span className="divider">•</span>
//               <a href="/cookies">Cookie Policy</a>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Animated Border Effect */}
//       <div className="footer-border">
//         <div className="border-animation"></div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;





import React, { useState, useEffect } from 'react';
import { 
  FaFacebookF, 
  FaTwitter, 
  FaInstagram, 
  FaLinkedinIn, 
  FaGithub, 
  FaDribbble, 
  FaBehance,
  FaArrowUp,
  FaHeart,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt
} from 'react-icons/fa';
import { SiUpwork, SiFiverr } from 'react-icons/si';

const Footer = () => {
  const [showScroll, setShowScroll] = useState(false);
  const currentYear = new Date().getFullYear();

  useEffect(() => {
    const checkScroll = () => {
      if (!showScroll && window.pageYOffset > 400) {
        setShowScroll(true);
      } else if (showScroll && window.pageYOffset <= 400) {
        setShowScroll(false);
      }
    };

    window.addEventListener('scroll', checkScroll);
    return () => window.removeEventListener('scroll', checkScroll);
  }, [showScroll]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const socialLinks = [
    { icon: <FaGithub />, href: 'https://github.com/MHassanEjaz', color: '#333', label: 'GitHub' },
    { icon: <FaLinkedinIn />, href: 'https://www.linkedin.com/in/muhammad-hassanofficial/', color: '#0077B5', label: 'LinkedIn' },
    { icon: <FaTwitter />, href: 'https://twitter.com', color: '#1DA1F2', label: 'Twitter' },
    { icon: <FaInstagram />, href: 'https://instagram.com', color: '#E4405F', label: 'Instagram' },
    { icon: <FaFacebookF />, href: 'https://facebook.com', color: '#1877F2', label: 'Facebook' },
    { icon: <FaDribbble />, href: 'https://dribbble.com', color: '#EA4C89', label: 'Dribbble' },
    { icon: <FaBehance />, href: 'https://behance.net', color: '#1769FF', label: 'Behance' },
    { icon: <SiUpwork />, href: 'https://upwork.com', color: '#14A800', label: 'Upwork' },
    { icon: <SiFiverr />, href: 'https://fiverr.com', color: '#1DBF73', label: 'Fiverr' },
  ];

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Projects', href: '#projects' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#contact' }
  ];

  const servicesLinks = [
    { name: 'Web Development', href: '#services' },
    { name: 'AI Chatbots', href: '#services' },
    { name: 'Automation', href: '#services' },
    { name: 'AI Integration', href: '#services' },
    { name: 'UI/UX Design', href: '#services' },
    { name: 'Consultation', href: '#services' }
  ];

  const contactInfo = [
    { icon: <FaEnvelope />, text: 'muhammadhassannn9@gmail.com', href: 'mailto:muhammadhassannn9@gmail.com' },
    { icon: <FaPhone />, text: '0307-4402475', href: 'tel:+923074402475' },
    { icon: <FaMapMarkerAlt />, text: 'Lahore, Pakistan', href: '#' }
  ];

  return (
    <footer className="footer">
      {/* Scroll to Top Button */}
      {showScroll && (
        <button 
          className="scroll-to-top"
          onClick={scrollToTop}
          aria-label="Scroll to top"
        >
          <FaArrowUp />
        </button>
      )}

      <div className="footer-content">
        <div className="container">
          <div className="footer-grid">
            {/* Brand Column */}
            <div className="footer-column brand-column">
              <div className="footer-logo" onClick={scrollToTop}>
                M Hassan<span className="logo-dot">.</span>
              </div>
              <p className="footer-tagline">
                Building AI-powered applications and end-to-end 
                machine learning systems. Let's build something 
                amazing together.
              </p>
              <div className="social-icons">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className="social-icon"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    style={{ '--icon-color': social.color }}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links Column */}
            <div className="footer-column">
              <h3 className="footer-heading">Quick Links</h3>
              <ul className="footer-links">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <a href={link.href} className="footer-link">
                      <span className="link-bullet">›</span>
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services Column */}
            <div className="footer-column">
              <h3 className="footer-heading">Services</h3>
              <ul className="footer-links">
                {servicesLinks.map((service, index) => (
                  <li key={index}>
                    <a href={service.href} className="footer-link">
                      <span className="link-bullet">›</span>
                      {service.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Column */}
            <div className="footer-column">
              <h3 className="footer-heading">Get In Touch</h3>
              <ul className="contact-info">
                {contactInfo.map((info, index) => (
                  <li key={index}>
                    <a href={info.href} className="contact-item">
                      <span className="contact-icon">{info.icon}</span>
                      <span>{info.text}</span>
                    </a>
                  </li>
                ))}
              </ul>

              {/* Newsletter */}
              <div className="newsletter">
                <p className="newsletter-text">Subscribe to my newsletter</p>
                <form className="newsletter-form">
                  <input 
                    type="email" 
                    placeholder="Your email address" 
                    className="newsletter-input"
                    required
                  />
                  <button type="submit" className="newsletter-btn">
                    Subscribe
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <div className="container">
          <div className="footer-bottom-content">
            <p className="copyright">
              © {currentYear} M Hassan. All rights reserved. 
              Made with <FaHeart className="heart-icon" /> by M Hassan
            </p>
            <div className="footer-bottom-links">
              <a href="/privacy">Privacy Policy</a>
              <span className="divider">•</span>
              <a href="/terms">Terms of Service</a>
              <span className="divider">•</span>
              <a href="/cookies">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>

      {/* Animated Border Effect */}
      <div className="footer-border">
        <div className="border-animation"></div>
      </div>
    </footer>
  );
};

export default Footer;
