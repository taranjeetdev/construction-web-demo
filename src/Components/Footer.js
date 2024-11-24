import React from 'react'
import LogoImg from '../images/logo-img.png';
import { BsLinkedin } from 'react-icons/bs';
import { FaFacebookF, FaInstagram } from 'react-icons/fa6';

const Footer = () => {
    const items = ['Servies', 'Projects', 'About Us', 'Contact US'];
    
    return (
        <footer className="bg-dark text-light py-4">
        <div className="container">
          {/* Top Section with Logo and Description */}
          <div className="row">
            <div className="col-md-6">
              <img
                src={LogoImg}
                alt="2022 Option Construction Logo"
                style={{ maxWidth: '150px' }}
                className="mb-3"
              />
              {/* <a href="https://pikbest.com//png-images/building-construction-crane-logo_10982536.html">
              Free  png images from pikbest.com
              </a> */}
              <p>
              Construction Corp. is a leading provider of general contracting, 
              petroleum construction, facility maintenance, and upgrade services. 
              Headquartered in Spruce Grove, Alberta, we proudly serve the commercial, 
              light industrial, and downstream oil and gas industries across Canada. 
              With a commitment to excellence, we deliver innovative solutions tailored to 
              meet the unique needs of every client.
              </p>
            </div>
            <div className="col-md-6">
              <h5>Quick Links</h5>
              <ul className="list-unstyled">
                {items?.map((item,index) => (
                    <li key={index}>
                    <a href="#services" className="text-light text-decoration-none">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
  
          <hr className="bg-light" />
  
          {/* Contact Information */}
          <div className="row">
            <div className="col-md-6">
              <h6>Contact Us</h6>
              <p>
                <strong>Main Office:</strong> #12, 55 Alberta Grove, Canada T7X 3B5 <br />
                <strong>Phone:</strong> 1.844.239.5340
              </p>
              <p>
                <strong>Canada Yard/Office:</strong> 135 Gunn Manitoba, Canada R2C 2Z2 <br />
                <strong>Phone:</strong> 780-723-2789
              </p>
            </div>
            <div className="col-md-6">
              <h6>Follow Us</h6>
              <div className='d-flex gap-2'>
              <BsLinkedin />
              <FaFacebookF />
              <FaInstagram />
              </div>
            </div>
          </div>
  
          <hr className="bg-light" />
  
          {/* Bottom Section */}
          <div className="row">
            <div className="col-md-6">
              <p>&copy; 2024 Construction Corp. All Rights Reserved.</p>
            </div>
            <div className="col-md-6 text-md-end">
              <a
                href="#privacy"
                className="text-light text-decoration-none me-3"
              >
                Privacy Policy
              </a>
              <span>
                Web Design and Web Hosting by{' '}
                <strong>Taranjeet</strong>
              </span>
            </div>
          </div>
        </div>
      </footer>
    )
}

export default Footer
