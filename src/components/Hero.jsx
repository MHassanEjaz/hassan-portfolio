function Hero() {
  const downloadCV = () => {
    const link = document.createElement('a');
    link.href = '/MHassan.pdf';
    link.download = 'Mhassan.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="hero" id="home">
      <p className="hero-intro animate-down">Hi! I'm M Hassan 👋</p>
      <h1 className="animate-up">
        AI/ML Engineer 
      </h1>

      <p className="hero-desc animate-fade">
        AI/ML Engineer with hands-on experience building end-to-end 
        machine learning systems and LLM-powered applications.
      </p>

      <div className="hero-buttons">
        <button className="btn-primary" onClick={downloadCV}>
          Download CV ↓
        </button>
        <button className="btn-secondary" onClick={scrollToProjects}>
          Projects ↓
        </button>
      </div>
    </section>
  );
}

export default Hero;