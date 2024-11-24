import React from 'react';
import Img1 from '../images/resedental-img.jpg';
import Img2 from  '../images/custom-img.jpg';
import Img3 from '../images/private-home-img.jpg';
import Img4 from '../images/contractor-img.jpg';
import Img5 from '../images/comercial-img.jpg';
import Img6 from '../images/high-ride-img.jpg';

const services = [
  {
    title: 'Residential',
    description: 'New Home Builders',
    bgImage: Img1,
    link: '#',
  },
  {
    title: 'Custom',
    description: 'Home Builders',
    bgImage: Img2,
    link: '#',
  },
  {
    title: 'Private',
    description: 'Home Owners',
    bgImage: Img3,
    link: '#',
  },
  {
    title: 'Contractors',
    description: 'Contractors',
    bgImage: Img4,
    link: '#',
  },
  {
    title: 'Industrial / Commercial',
    description: 'Industrial / Commercial',
    bgImage: Img5,
    link: '#',
  },
  {
    title: 'High Rise / Mid Rise',
    description: 'High Rise / Mid Rise',
    bgImage: Img6,
    link: '#',
  },
];

const Services = () => {
  return (
    <section className="our-services py-5">
      <div className="container">
        <h2 className="text-center mb-4">Our Services</h2>
        <div className="row g-4">
          {services.map((service, index) => (
            <div className="col-md-4" key={index}>
              <div
                className="card service-card text-white"
                style={{
                  backgroundImage: `url(${service.bgImage})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  height: '250px',
                }}
              >
                <div className="card-body d-flex flex-column justify-content-end">
                  <h5 className="card-title">{service.title}</h5>
                  <p className="card-text">{service.description}</p>
                  <a
                    href={service.link}
                    className="btn btn-light btn-sm mt-2"
                    style={{ maxWidth: '120px' }}
                  >
                    Read More
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

export default Services;
