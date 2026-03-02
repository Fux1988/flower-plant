function About() {
  return (
    <section className="container">
      <h2>About FlowerPlant</h2>

      <p className="about-subtitle">
        A simple platform to help people learn plant care and manage their plant collections.
      </p>

      <div className="about-grid">
        <div className="about-card">
          <h3>Explore Plants</h3>
          <p>
            Learn how to take care of different plant species and their requirements.
          </p>
        </div>

        <div className="about-card">
          <h3>Track Your Collection</h3>
          <p>
            Save plants you own and keep track of watering and care routines.
          </p>
        </div>

        <div className="about-card">
          <h3>Beginner Friendly</h3>
          <p>
            The website is designed to be simple and easy to use for everyone.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;