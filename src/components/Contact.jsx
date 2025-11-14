import React from "react";

const Contact = () => {
  return (
    <div className="section-inner section-inner--center">
      <h2 className="section-title">Contact</h2>
      <p className="section-text section-text--center">
        Ready to work together, or just want to say hi? Add your email or a
        contact form link here.
      </p>
      {/* Replace with a real mailto or contact link */}
      <a href="mailto:you@example.com" className="hero__cta">
        Email me
      </a>
    </div>
  );
};

export default Contact;
