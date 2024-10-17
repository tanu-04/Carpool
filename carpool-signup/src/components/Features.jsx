import React from 'react';

const Features = () => {
  return (
    <section className="features">
      <h2>Key Features</h2>
      <div className="features-list">
        <div className="feature-item">
          <img src="/images/route-matching.png" alt="Route Matching Icon" className="feature-icon" />
          <h3>Route Matching</h3>
          <p>Get matched with the best routes for your commute.</p>
        </div>
        <div className="feature-item">
          <img src="/images/incentives.png" alt="Incentives Icon" className="feature-icon" />
          <h3>Incentives</h3>
          <p>Earn rewards and save money by carpooling.</p>
        </div>
        <div className="feature-item">
          <img src="/images/userfrndly.png" alt="User-Friendly Interface Icon" className="feature-icon" />
          <h3>User-Friendly Interface</h3>
          <p>Easy to use with a seamless experience.</p>
        </div>
      </div>
    </section>
  );
};

export default Features;
