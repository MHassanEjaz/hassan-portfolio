import { useEffect, useRef } from "react";
import avatar from "../assets/avatar.jpg";
import { FaCode, FaGraduationCap, FaFolderOpen } from "react-icons/fa";
import python from "../assets/python.jpg";
import cpp from "../assets/cpp.png";
import sql from "../assets/sql.png";
import html from "../assets/html.png";
import css from "../assets/css.png";
import js from "../assets/js.png";
import react from "../assets/react.png";

const tools = [python, cpp, sql, html, css, js, react];

const About = () => {
  const aboutRef = useRef(null);
  const floatingProfileRef = useRef(null);
  const aboutBoxRef = useRef(null);
  const bgCardsRef = useRef([]);
  const toolsSliderRef = useRef(null);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.3,
      rootMargin: '50px'
    };

  
    const createObserver = (element) => {
      if (!element) return null;
      
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              
              entry.target.classList.add('animated');
            } else {
              entry.target.classList.remove('animated');
            }
          });
        },
        observerOptions
      );
      
      observer.observe(element);
      return observer;
    };

    const observers = [];
    
    if (floatingProfileRef.current) {
      observers.push(createObserver(floatingProfileRef.current));
    }
    
    if (aboutBoxRef.current) {
      observers.push(createObserver(aboutBoxRef.current));
    }
    
    bgCardsRef.current.forEach((card) => {
      if (card) {
        observers.push(createObserver(card));
      }
    });
    
    if (toolsSliderRef.current) {
      observers.push(createObserver(toolsSliderRef.current));
    }


    return () => {
      observers.forEach(observer => observer && observer.disconnect());
    };
  }, []);

  const addToCardsRef = (el, index) => {
    if (el && !bgCardsRef.current.includes(el)) {
      bgCardsRef.current[index] = el;
    }
  };

  return (
    <section className="about" id="about" ref={aboutRef}>
      <p className="about-sub">Introduction</p>
      <h2 className="about-title">About Me</h2>

      <div className="about-layout">
        <div className="floating-profile" ref={floatingProfileRef}>
          <img src={avatar} alt="profile" />
          <p>AI/ML Engineer</p>
        </div>

        <div className="about-box" ref={aboutBoxRef}>
          <p className="about-text">
            {/* I'm a software engineer experienced in MERN stack development,
            primarily in React.js, Next.js, and full-stack applications.
            I also have experience building scalable and modern user interfaces. */}
            I'm a AI/ML Engineer with hands-on experience building end-to-end 
            machine learning systems, LLM-powered applications, and 
            deployed data science solutions.
            Core expertise in designing RAG pipelines, working with 
            large language model APIs, and applying supervised learning 
            algorithms across real-world datasets — from fraud detection 
            to industrial predictive maintenance.

          </p>

          <h3>Background</h3>
          <div className="bg-grid">
            <div className="bg-card" ref={(el) => addToCardsRef(el, 0)}>
              <div className="icon-circle"><FaCode /></div>
              <div>
                <h4>Languages</h4>
                {/* <p>HTML, CSS, JavaScript, React, Node.js, MongoDB</p> */}
                <p>Python, Pandas, Numpy, Scikit-learn, SQL, Langchain, RAG, APIs</p>
              </div>
            </div>
            <div className="bg-card" ref={(el) => addToCardsRef(el, 1)}>
              <div className="icon-circle"><FaGraduationCap /></div>
              <div>
                <h4>Education</h4>
                <p>BSCS in Computer Science</p>
              </div>
            </div>
            <div className="bg-card full" ref={(el) => addToCardsRef(el, 2)}>
              <div className="icon-circle"><FaFolderOpen /></div>
              <div>
                <h4>Projects</h4>
                <p>Check out my projects on GitHub</p>
              </div>
            </div>
          </div>

          <h3>Tools & Technologies</h3>
          <div className="tools-slider" ref={toolsSliderRef}>
            <div className="tools-track">
              {[...tools, ...tools].map((tool, i) => (
                <div className="tool" key={i}>
                  <img src={tool} alt="tool" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;