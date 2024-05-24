import React from 'react';

const pageContentStyle = {
  padding: '2rem',
};

const headingStyle = {
  fontSize: '2rem',
  marginBottom: '1rem',
};

const paragraphStyle = {
  marginBottom: '1rem',
};

function AboutUs() {
  return (
    <div className="page-content" style={pageContentStyle}>
      <h1 style={headingStyle}>About Us</h1>
      <p style={paragraphStyle}>
        Welcome to our About Us page! Here, you can learn more about our institute and what we stand for.
      </p>
      <p style={paragraphStyle}>
        Our institute is dedicated to providing quality education and fostering a supportive learning environment for all students.
      </p>
      <p style={paragraphStyle}>
        Whether you're just starting your educational journey or looking to advance your skills, we're here to help you succeed.
      </p>
      <p style={paragraphStyle}>
        Get in touch with us to learn more about our programs, faculty, and facilities. We look forward to hearing from you!
      </p>
    </div>
  );
}

export default AboutUs;
