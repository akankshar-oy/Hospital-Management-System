import React from "react";

const Biography = ({imageUrl}) => {
  return (
    <>
      <div className="container biography">
        <div className="banner">
          <img src={imageUrl} alt="whoweare" />
        </div>
        <div className="banner">
          <p>Biography</p>
          <h3>Who We Are</h3>
          <p>
            ZeeCare Medical Institute has been serving patients across India
            with quality, affordable healthcare for over a decade. Our team of
            experienced doctors and specialists is committed to providing
            compassionate care, accurate diagnosis, and modern treatment for
            every patient who walks through our doors.
          </p>
          <p>Based in Delhi, India.</p>
          <p>Trusted by thousands of patients since 2013.</p>
          <p>
            From routine checkups to emergency care, our hospital is equipped
            with modern facilities and a dedicated staff available around the
            clock. We believe healthcare should be accessible, transparent, and
            centered around the patient's needs.
          </p>
          <p>Your health is our priority.</p>
          <p>Book an appointment today and experience the difference.</p>
        </div>
      </div>
    </>
  );
};

export default Biography;
