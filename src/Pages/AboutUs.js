import React from "react";
import AboutImg from '../images/about-img.jpg';

const AboutUs = () => {
  return (
    <section className="about-us bg-light py-5">
      <div className="container">
        <div className="row align-items-center">
          {/* Contact Content (Left Side) */}
          <div className="col-lg-6 col-md-12">
            <h2 className="mb-3">About Us</h2>
            <p className="lead text-dark">
              Construction Corp. is a diverse firm that provides its clients with general contracting, petroleum
              construction, facility maintenance, and upgrade services. We are based out of Spruce Grove, Alberta,
              serving the commercial, light industrial, downstream oil and gas industries.
            </p>
            <a href="#" className="project-btn btn-lg me-3 mb-3">
              Learn More
            </a>
          </div>
          {/* Image Content (Right Side) */}
          <div className="col-lg-6 col-md-12 text-center">
            <img
              src={AboutImg}
              alt="About Us"
              className="img-fluid rounded shadow"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
