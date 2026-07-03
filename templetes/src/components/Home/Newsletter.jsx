import React, { useState } from 'react';

const Newsletter = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Process form submission here (e.g., API call)
    if (email.trim() !== '') {
      console.log(`Subscribing email: ${email}`);
      alert(`Thank you for subscribing with: ${email}`);
      setEmail(''); // Clears the input field after successful submit
    } else {
      alert('Please enter a valid email address.');
    }
  };

  return (
    <div className="newsletter">
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <h3>Subscribe Our Newsletter</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec viverra at massa sit amet ultricies. Nullam consequat, mauris non interdum cursus
          </p>
        </div>

        {/* Newsletter Form */}
        <div className="form">
          <form onSubmit={handleSubmit} className="d-flex align-items-center justify-content-center">
            <input 
              type="email" 
              placeholder="Your email here" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button type="submit">Submit</button>
          </form>
        </div>

      </div>
    </div>
  );
};

export default Newsletter;