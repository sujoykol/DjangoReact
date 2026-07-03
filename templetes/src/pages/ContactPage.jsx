import React, { useState } from 'react';
import Breadcrumb from '../components/common/Breadcrumb';
;

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log('Contact form execution dataset:', formData);
    // Process async execution layers or operational API triggers here
  };

  return (
    <>
      <Breadcrumb />

      <div className="contact py-5 bg-white">
        <div className="container">
          <div className="row align-items-center g-4">
            
            {/* Left Side: Interactive Message Gateway */}
            <div className="col-md-7">
              <h4 className="mb-4 text-dark fw-normal">
                Receive messages instantly with our PHP and Ajax contact form - available in the{' '}
                <a href="https://htmlcodex.com/downloading/?item=419" className="text-primary text-decoration-none fw-semibold">
                  Pro Version
                </a>{' '}
                only.
              </h4>
              
              <div className="form bg-light p-4 border rounded">
                <form onSubmit={handleFormSubmit}>
                  <div className="row g-3">
                    <div className="col-md-6">
                      <input 
                        type="text" 
                        name="name"
                        className="form-control" 
                        placeholder="Your Name" 
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div className="col-md-6">
                      <input 
                        type="email" 
                        name="email"
                        className="form-control" 
                        placeholder="Your Email" 
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div className="col-12">
                      <input 
                        type="text" 
                        name="subject"
                        className="form-control" 
                        placeholder="Subject" 
                        value={formData.subject}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div className="col-12">
                      <textarea 
                        name="message"
                        className="form-control" 
                        rows="5" 
                        placeholder="Message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                      ></textarea>
                    </div>
                    <div className="col-12">
                      <button type="submit" className="btn btn-primary px-4 py-2 fw-bold text-uppercase">
                        Send Message
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>

            {/* Right Side: Informational Context & Social Anchors */}
            <div className="col-md-5">
              <div className="contact-info p-4 border rounded bg-light">
                <div className="section-header mb-4">
                  <h3 className="fw-bold text-dark">Get in Touch</h3>
                  <p className="text-secondary small mt-2">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. In condimentum quam ac mi viverra dictum. In efficitur ipsum diam, at dignissim lorem tempor in. Vivamus tempor hendrerit finibus.
                  </p>
                </div>
                
                <div className="d-flex flex-column gap-3 mb-4">
                  <h5 className="fs-6 text-dark mb-0"><i className="fa fa-map-marker text-primary me-2"></i>123 E Shop, Los Angeles, CA, USA</h5>
                  <h5 className="fs-6 text-dark mb-0"><i className="fa fa-envelope text-primary me-2"></i>email@example.com</h5>
                  <h5 className="fs-6 text-dark mb-0"><i className="fa fa-phone text-primary me-2"></i>+123-456-7890</h5>
                </div>

                <div className="social d-flex gap-2">
                  {['twitter', 'facebook', 'linkedin', 'instagram', 'youtube'].map((platform) => (
                    <a key={platform} href={`https://${platform}.com`} className="btn btn-outline-secondary btn-sm rounded-circle d-flex align-items-center justify-content-center" style={{ width: '36px', height: '36px' }}>
                      <i className={`fa fa-${platform}`}></i>
                    </a>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

 
    </>
  );
};

export default ContactPage;