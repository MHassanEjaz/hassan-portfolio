// import React, { useState, useEffect, useRef } from 'react';
// import { 
//   FaGithub, 
//   FaExternalLinkAlt, 
//   FaCode, 
//   FaLaptop,
//   FaMobileAlt,
//   FaServer,
//   FaDatabase,
//   FaArrowLeft,
//   FaArrowRight,
//   FaStar,
//   FaEye
// } from 'react-icons/fa';

// const Projects = () => {
//   const [activeIndex, setActiveIndex] = useState(0);
//   const [autoPlay, setAutoPlay] = useState(true);
//   const sliderRef = useRef(null);
//   const intervalRef = useRef(null);

//   const projects = [
//     {
//       id: 1,
//       title: 'Credit Card Fraud Detection',
//       description: 'Full-featured online store with shopping cart, payment integration, and admin dashboard.',
//       image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
//       tech: ['React', 'Node.js', 'MongoDB', 'Stripe'],
//       github: 'https://github.com/MHassanEjaz/credit-card-fraud-detection',
//       live: 'https://credit-card-fraud-detection-app-xyz123.streamlit.app/',
//       category: 'Full Stack',
//       rating: 4.8,
//       views: 1250
//     },
//     {
//       id: 2,
//       title: 'AI-Assistant',
//       description: 'Intelligent chatbot with natural language processing and multi-platform integration.',
//       image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
//       tech: ['Python', 'Langchain', 'Streamlit', 'Cerebras API, Exa API'],
//       github: 'https://github.com/MHassanEjaz/AI-Assistant',
//       live: 'https://github.com/MHassanEjaz/AI-Assistant',
//       category: 'AI/ML',
//       rating: 4.9,
//       views: 2100
//     },
//     {
//       id: 3,
//       title: 'Heart Disease Detection',
//       description: 'Collaborative task management tool with real-time updates and team collaboration features.',
//       image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
//       tech: ['React', 'Socket.io', 'Express', 'PostgreSQL'],
//       github: 'https://github.com/MHassanEjaz/heart-disease-prediction',
//       live: 'https://heart-disease-disease-prediction-123.streamlit.app/',
//       category: 'Web App',
//       rating: 4.7,
//       views: 980
//     },
//     {
//       id: 4,
//       title: 'Predictive Maintenance - Machine Failure Classification',
//       description: 'Real-time cryptocurrency tracking dashboard with price alerts and portfolio management.',
//       image: 'https://images.unsplash.com/photo-1620336655055-bd87c5d1d73f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
//       tech: ['Next.js', 'TypeScript', 'Tailwind', 'WebSocket'],
//       github: 'https://github.com/MHassanEjaz/predictive-maintenance',
//       live: 'https://github.com/MHassanEjaz/predictive-maintenance',
//       category: 'Website',
//       rating: 4.6,
//       views: 1560
//     },
//     {
//       id: 5,
//       title: 'Fitness Tracking App',
//       description: 'Mobile fitness app with workout plans, progress tracking, and social features.',
//       image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
//       tech: ['React Native', 'Firebase', 'Redux', 'Chart.js'],
//       github: 'https://github.com',
//       live: 'https://example.com',
//       category: 'Mobile',
//       rating: 4.8,
//       views: 1890
//     },
//     {
//       id: 6,
//       title: 'Content Management System',
//       description: 'Custom CMS with drag-and-drop builder, SEO tools, and multi-user support.',
//       image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
//       tech: ['Vue.js', 'Laravel', 'MySQL', 'AWS'],
//       github: 'https://github.com',
//       live: 'https://example.com',
//       category: 'CMS',
//       rating: 4.7,
//       views: 1320
//     }
//   ];

//   // Auto-slide functionality
//   useEffect(() => {
//     if (autoPlay) {
//       intervalRef.current = setInterval(() => {
//         nextSlide();
//       }, 3000);
//     }
    
//     return () => {
//       if (intervalRef.current) {
//         clearInterval(intervalRef.current);
//       }
//     };
//   }, [autoPlay, activeIndex]);

//   const nextSlide = () => {
//     setActiveIndex((prevIndex) => (prevIndex + 1) % projects.length);
//   };

//   const prevSlide = () => {
//     setActiveIndex((prevIndex) => (prevIndex - 1 + projects.length) % projects.length);
//   };

//   const goToSlide = (index) => {
//     setActiveIndex(index);
//   };

//   const toggleAutoPlay = () => {
//     setAutoPlay(!autoPlay);
//   };

//   const getCategoryIcon = (category) => {
//     switch(category) {
//       case 'Full Stack': return <FaCode />;
//       case 'AI/ML': return <FaServer />;
//       case 'Web App': return <FaLaptop />;
//       case 'Mobile': return <FaMobileAlt />;
//       case 'Dashboard': return <FaDatabase />;
//       case 'CMS': return <FaCode />;
//       default: return <FaCode />;
//     }
//   };

//   return (
//     <section className="projects-section" id="projects">
//       <div className="container">
//         {/* Section Header */}
//         <div className="projects-header">
//           <div className="projects-title">
//             <h2 className="projects-main-title">Featured Projects</h2>
//             <p className="projects-subtitle">Discover my recent work and portfolio projects</p>
//           </div>
          
//           <div className="projects-controls">
//             <button 
//               className="control-btn"
//               onClick={toggleAutoPlay}
//               title={autoPlay ? 'Pause auto-slide' : 'Start auto-slide'}
//             >
//               {autoPlay ? '⏸️ Pause' : '▶️ Play'}
//             </button>
//           </div>
//         </div>

//         {/* Main Slider */}
//         <div className="projects-slider">
//           <button 
//             className="slider-nav prev"
//             onClick={prevSlide}
//             aria-label="Previous project"
//           >
//             <FaArrowLeft />
//           </button>

//           <div className="slider-container">
//             <div 
//               className="slider-track"
//               ref={sliderRef}
//               style={{ transform: `translateX(-${activeIndex * 100}%)` }}
//             >
//               {projects.map((project, index) => (
//                 <div 
//                   key={project.id} 
//                   className={`slider-slide ${index === activeIndex ? 'active' : ''}`}
//                 >
//                   <div className="project-card">
//                     {/* Project Image */}
//                     <div className="project-image">
//                       <img src={project.image} alt={project.title} />
//                       <div className="project-badge">
//                         {getCategoryIcon(project.category)}
//                         <span>{project.category}</span>
//                       </div>
//                       <div className="project-stats">
//                         <div className="stat">
//                           <FaStar />
//                           <span>{project.rating}</span>
//                         </div>
//                         <div className="stat">
//                           <FaEye />
//                           <span>{project.views.toLocaleString()}</span>
//                         </div>
//                       </div>
//                     </div>

//                     {/* Project Content */}
//                     <div className="project-content">
//                       <h3 className="project-title">{project.title}</h3>
//                       <p className="project-description">{project.description}</p>
                      
//                       {/* Tech Stack */}
//                       <div className="project-tech">
//                         {project.tech.map((tech, idx) => (
//                           <span key={idx} className="tech-tag">{tech}</span>
//                         ))}
//                       </div>

//                       {/* Project Actions */}
//                       <div className="project-actions">
//                         <a 
//                           href={project.github}
//                           target="_blank"
//                           rel="noopener noreferrer"
//                           className="action-btn github-btn"
//                         >
//                           <FaGithub /> Code
//                         </a>
//                         <a 
//                           href={project.live}
//                           target="_blank"
//                           rel="noopener noreferrer"
//                           className="action-btn live-btn"
//                         >
//                           <FaExternalLinkAlt /> Live Demo
//                         </a>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>

//           <button 
//             className="slider-nav next"
//             onClick={nextSlide}
//             aria-label="Next project"
//           >
//             <FaArrowRight />
//           </button>
//         </div>

//         {/* Project Dots Indicator */}
//         <div className="slider-dots">
//           {projects.map((_, index) => (
//             <button
//               key={index}
//               className={`dot ${index === activeIndex ? 'active' : ''}`}
//               onClick={() => goToSlide(index)}
//               aria-label={`Go to slide ${index + 1}`}
//             />
//           ))}
//         </div>

//         {/* Projects Grid (for mobile/tablet) */}
//         <div className="projects-grid">
//           {projects.map((project) => (
//             <div key={project.id} className="project-grid-card">
//               <div className="grid-image">
//                 <img src={project.image} alt={project.title} />
//                 <div className="grid-badge">
//                   {getCategoryIcon(project.category)}
//                 </div>
//               </div>
              
//               <div className="grid-content">
//                 <h4>{project.title}</h4>
//                 <p className="grid-description">{project.description}</p>
                
//                 <div className="grid-tech">
//                   {project.tech.slice(0, 3).map((tech, idx) => (
//                     <span key={idx} className="tech-chip">{tech}</span>
//                   ))}
//                   {project.tech.length > 3 && (
//                     <span className="tech-more">+{project.tech.length - 3}</span>
//                   )}
//                 </div>
                
//                 <div className="grid-actions">
//                   <a href={project.github} target="_blank" rel="noopener noreferrer">
//                     <FaGithub />
//                   </a>
//                   <a href={project.live} target="_blank" rel="noopener noreferrer">
//                     <FaExternalLinkAlt />
//                   </a>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Projects;


// import React, { useState, useEffect, useRef } from 'react';
// import { 
//   FaGithub, 
//   FaExternalLinkAlt, 
//   FaCode, 
//   FaLaptop,
//   FaMobileAlt,
//   FaServer,
//   FaDatabase,
//   FaArrowLeft,
//   FaArrowRight,
//   FaStar,
//   FaEye
// } from 'react-icons/fa';

// const Projects = () => {
//   const [activeIndex, setActiveIndex] = useState(0);
//   const [autoPlay, setAutoPlay] = useState(true);
//   const sliderRef = useRef(null);
//   const intervalRef = useRef(null);

//   const projects = [
//     {
//       id: 1,
//       title: 'AI Multi-Agent Research Assistant',
//       description: 'Multi-agent AI system using LangChain, Cerebras LLM, and Exa API that combines real-time web search with Retrieval-Augmented Generation (RAG) to generate comprehensive, source-backed research reports.',
//       image: 'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
//       tech: ['Python', 'LangChain', 'ChromaDB', 'Cerebras API', 'Exa API', 'RAG'],
//       github: 'https://github.com/MHassanEjaz/AI-Assistant',
//       live: 'https://github.com/MHassanEjaz/AI-Assistant',
//       hasLive: false,
//       category: 'AI/ML',
//       rating: 4.9,
//       views: 2100
//     },
//     {
//       id: 2,
//       title: 'Credit Card Fraud Detection',
//       description: 'End-to-end fraud detection system trained on 284,807 real transactions (0.17% fraud rate). Handled class imbalance using SMOTE. Achieved 92% precision and 81.2% F1-score with Random Forest. Deployed as a live Streamlit web app.',
//       image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
//       tech: ['Python', 'Scikit-learn', 'SMOTE', 'Random Forest', 'Streamlit', 'Pandas'],
//       github: 'https://github.com/MHassanEjaz/credit-card-fraud-detection',
//       live: 'https://credit-card-fraud-detection-app-xyz123.streamlit.app/',
//       hasLive: true,
//       category: 'AI/ML',
//       rating: 4.8,
//       views: 1850
//     },
//     {
//       id: 3,
//       title: 'Predictive Maintenance Classification',
//       description: 'Machine failure prediction system on 10,000 industrial sensor records. Engineered a Power feature from torque and rotational speed. Compared LDA, Naive Bayes, KNN, and Random Forest with 5-fold cross-validation.',
//       image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
//       tech: ['Python', 'Scikit-learn', 'LDA', 'Random Forest', 'Pandas', 'Seaborn'],
//       github: 'https://github.com/MHassanEjaz/predictive-maintenance',
//       live: 'https://github.com/MHassanEjaz/predictive-maintenance',
//       hasLive: false,
//       category: 'AI/ML',
//       rating: 4.7,
//       views: 1200
//     },
//     {
//       id: 4,
//       title: 'Heart Disease Prediction',
//       description: 'Binary classification model predicting heart disease risk from patient clinical data. Compared Random Forest, Logistic Regression, Naive Bayes, and KNN. Random Forest achieved 87% accuracy and 86.79% F1-score. Live Streamlit app available.',
//       image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
//       tech: ['Python', 'Scikit-learn', 'Random Forest', 'KNN', 'Naive Bayes', 'Streamlit'],
//       github: 'https://github.com/MHassanEjaz/heart-disease-prediction',
//       live: 'https://heart-disease-disease-prediction-123.streamlit.app/',
//       hasLive: true,
//       category: 'AI/ML',
//       rating: 4.8,
//       views: 1560
//     },
//   ];

//   // Auto-slide functionality
//   useEffect(() => {
//     if (autoPlay) {
//       intervalRef.current = setInterval(() => {
//         nextSlide();
//       }, 3000);
//     }
    
//     return () => {
//       if (intervalRef.current) {
//         clearInterval(intervalRef.current);
//       }
//     };
//   // }, [autoPlay, activeIndex]);
//   }, [autoPlay, activeIndex, nextSlide]);

//   const nextSlide = () => {
//     setActiveIndex((prevIndex) => (prevIndex + 1) % projects.length);
//   };

//   const prevSlide = () => {
//     setActiveIndex((prevIndex) => (prevIndex - 1 + projects.length) % projects.length);
//   };

//   const goToSlide = (index) => {
//     setActiveIndex(index);
//   };

//   const toggleAutoPlay = () => {
//     setAutoPlay(!autoPlay);
//   };

//   const getCategoryIcon = (category) => {
//     switch(category) {
//       case 'Full Stack': return <FaCode />;
//       case 'AI/ML': return <FaServer />;
//       case 'Web App': return <FaLaptop />;
//       case 'Mobile': return <FaMobileAlt />;
//       case 'Dashboard': return <FaDatabase />;
//       case 'CMS': return <FaCode />;
//       default: return <FaCode />;
//     }
//   };

//   return (
//     <section className="projects-section" id="projects">
//       <div className="container">
//         {/* Section Header */}
//         <div className="projects-header">
//           <div className="projects-title">
//             <h2 className="projects-main-title">Featured Projects</h2>
//             <p className="projects-subtitle">Discover my recent work and portfolio projects</p>
//           </div>
          
//           <div className="projects-controls">
//             <button 
//               className="control-btn"
//               onClick={toggleAutoPlay}
//               title={autoPlay ? 'Pause auto-slide' : 'Start auto-slide'}
//             >
//               {autoPlay ? '⏸️ Pause' : '▶️ Play'}
//             </button>
//           </div>
//         </div>

//         {/* Main Slider */}
//         <div className="projects-slider">
//           <button 
//             className="slider-nav prev"
//             onClick={prevSlide}
//             aria-label="Previous project"
//           >
//             <FaArrowLeft />
//           </button>

//           <div className="slider-container">
//             <div 
//               className="slider-track"
//               ref={sliderRef}
//               style={{ transform: `translateX(-${activeIndex * 100}%)` }}
//             >
//               {projects.map((project, index) => (
//                 <div 
//                   key={project.id} 
//                   className={`slider-slide ${index === activeIndex ? 'active' : ''}`}
//                 >
//                   <div className="project-card">
//                     {/* Project Image */}
//                     <div className="project-image">
//                       <img src={project.image} alt={project.title} />
//                       <div className="project-badge">
//                         {getCategoryIcon(project.category)}
//                         <span>{project.category}</span>
//                       </div>
//                       <div className="project-stats">
//                         <div className="stat">
//                           <FaStar />
//                           <span>{project.rating}</span>
//                         </div>
//                         <div className="stat">
//                           <FaEye />
//                           <span>{project.views.toLocaleString()}</span>
//                         </div>
//                       </div>
//                     </div>

//                     {/* Project Content */}
//                     <div className="project-content">
//                       <h3 className="project-title">{project.title}</h3>
//                       <p className="project-description">{project.description}</p>

import React, { useState, useEffect, useRef, useCallback } from 'react';
import { 
  FaGithub, 
  FaExternalLinkAlt, 
  FaCode, 
  FaLaptop,
  FaMobileAlt,
  FaServer,
  FaDatabase,
  FaArrowLeft,
  FaArrowRight,
  FaStar,
  FaEye
} from 'react-icons/fa';

const Projects = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);
  const sliderRef = useRef(null);
  const intervalRef = useRef(null);

  const projects = [
    {
      id: 1,
      title: 'AI Multi-Agent Research Assistant',
      description: 'Multi-agent AI system using LangChain, Cerebras LLM, and Exa API that combines real-time web search with Retrieval-Augmented Generation (RAG) to generate comprehensive, source-backed research reports.',
      image: 'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      tech: ['Python', 'LangChain', 'ChromaDB', 'Cerebras API', 'Exa API', 'RAG'],
      github: 'https://github.com/MHassanEjaz/AI-Assistant',
      live: 'https://github.com/MHassanEjaz/AI-Assistant',
      hasLive: false,
      category: 'AI/ML',
      rating: 4.9,
      views: 2100
    },
    {
      id: 2,
      title: 'Credit Card Fraud Detection',
      description: 'End-to-end fraud detection system trained on 284,807 real transactions (0.17% fraud rate). Handled class imbalance using SMOTE. Achieved 92% precision and 81.2% F1-score with Random Forest. Deployed as a live Streamlit web app.',
      image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      tech: ['Python', 'Scikit-learn', 'SMOTE', 'Random Forest', 'Streamlit', 'Pandas'],
      github: 'https://github.com/MHassanEjaz/credit-card-fraud-detection',
      live: 'https://credit-card-fraud-detection-app-xyz123.streamlit.app/',
      hasLive: true,
      category: 'AI/ML',
      rating: 4.8,
      views: 1850
    },
    {
      id: 3,
      title: 'Predictive Maintenance Classification',
      description: 'Machine failure prediction system on 10,000 industrial sensor records. Engineered a Power feature from torque and rotational speed. Compared LDA, Naive Bayes, KNN, and Random Forest with 5-fold cross-validation.',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      tech: ['Python', 'Scikit-learn', 'LDA', 'Random Forest', 'Pandas', 'Seaborn'],
      github: 'https://github.com/MHassanEjaz/predictive-maintenance',
      live: 'https://github.com/MHassanEjaz/predictive-maintenance',
      hasLive: false,
      category: 'AI/ML',
      rating: 4.7,
      views: 1200
    },
    {
      id: 4,
      title: 'Heart Disease Prediction',
      description: 'Binary classification model predicting heart disease risk from patient clinical data. Compared Random Forest, Logistic Regression, Naive Bayes, and KNN. Random Forest achieved 87% accuracy and 86.79% F1-score. Live Streamlit app available.',
      image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      tech: ['Python', 'Scikit-learn', 'Random Forest', 'KNN', 'Naive Bayes', 'Streamlit'],
      github: 'https://github.com/MHassanEjaz/heart-disease-prediction',
      live: 'https://heart-disease-disease-prediction-123.streamlit.app/',
      hasLive: true,
      category: 'AI/ML',
      rating: 4.8,
      views: 1560
    },
  ];

  // ── Define all functions BEFORE useEffect ──

  const nextSlide = useCallback(() => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % projects.length);
  }, [projects.length]);

  const prevSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + projects.length) % projects.length);
  };

  const goToSlide = (index) => {
    setActiveIndex(index);
  };

  const toggleAutoPlay = () => {
    setAutoPlay(!autoPlay);
  };

  // ── useEffect AFTER functions ──
  useEffect(() => {
    if (autoPlay) {
      intervalRef.current = setInterval(() => {
        nextSlide();
      }, 3000);
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [autoPlay, activeIndex, nextSlide]);

  const getCategoryIcon = (category) => {
    switch(category) {
      case 'Full Stack': return <FaCode />;
      case 'AI/ML': return <FaServer />;
      case 'Web App': return <FaLaptop />;
      case 'Mobile': return <FaMobileAlt />;
      case 'Dashboard': return <FaDatabase />;
      case 'CMS': return <FaCode />;
      default: return <FaCode />;
    }
  };

  return (
    <section className="projects-section" id="projects">
      <div className="container">
        <div className="projects-header">
          <div className="projects-title">
            <h2 className="projects-main-title">Featured Projects</h2>
            <p className="projects-subtitle">Discover my recent work and portfolio projects</p>
          </div>
          <div className="projects-controls">
            <button
              className="control-btn"
              onClick={toggleAutoPlay}
              title={autoPlay ? 'Pause auto-slide' : 'Start auto-slide'}
            >
              {autoPlay ? '⏸️ Pause' : '▶️ Play'}
            </button>
          </div>
        </div>

        <div className="projects-slider">
          <button className="slider-nav prev" onClick={prevSlide} aria-label="Previous project">
            <FaArrowLeft />
          </button>

          <div className="slider-container">
            <div
              className="slider-track"
              ref={sliderRef}
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {projects.map((project, index) => (
                <div
                  key={project.id}
                  className={`slider-slide ${index === activeIndex ? 'active' : ''}`}
                >
                  <div className="project-card">
                    <div className="project-image">
                      <img src={project.image} alt={project.title} />
                      <div className="project-badge">
                        {getCategoryIcon(project.category)}
                        <span>{project.category}</span>
                      </div>
                      <div className="project-stats">
                        <div className="stat"><FaStar /><span>{project.rating}</span></div>
                        <div className="stat"><FaEye /><span>{project.views.toLocaleString()}</span></div>
                      </div>
                    </div>

                    <div className="project-content">
                      <h3 className="project-title">{project.title}</h3>
                      <p className="project-description">{project.description}</p>

                      <div className="project-tech">
                        {project.tech.map((tech, idx) => (
                          <span key={idx} className="tech-tag">{tech}</span>
                        ))}
                      </div>

                      <div className="project-actions">
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="action-btn github-btn"
                        >
                          <FaGithub /> Code
                        </a>
                        <a
                          href={project.hasLive ? project.live : project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="action-btn live-btn"
                        >
                          {project.hasLive
                            ? <><FaExternalLinkAlt /> Live Demo</>
                            : <><FaGithub /> View on GitHub</>
                          }
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button className="slider-nav next" onClick={nextSlide} aria-label="Next project">
            <FaArrowRight />
          </button>
        </div>

        <div className="slider-dots">
          {projects.map((_, index) => (
            <button
              key={index}
              className={`dot ${index === activeIndex ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-grid-card">
              <div className="grid-image">
                <img src={project.image} alt={project.title} />
                <div className="grid-badge">{getCategoryIcon(project.category)}</div>
              </div>
              <div className="grid-content">
                <h4>{project.title}</h4>
                <p className="grid-description">{project.description}</p>
                <div className="grid-tech">
                  {project.tech.slice(0, 3).map((tech, idx) => (
                    <span key={idx} className="tech-chip">{tech}</span>
                  ))}
                  {project.tech.length > 3 && (
                    <span className="tech-more">+{project.tech.length - 3}</span>
                  )}
                </div>
                <div className="grid-actions">
                  <a href={project.github} target="_blank" rel="noopener noreferrer" title="View Code">
                    <FaGithub />
                  </a>
                  <a
                    href={project.hasLive ? project.live : project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={project.hasLive ? 'Live Demo' : 'View on GitHub'}
                  >
                    {project.hasLive ? <FaExternalLinkAlt /> : <FaGithub />}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;