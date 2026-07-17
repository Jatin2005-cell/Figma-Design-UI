import "./Newsletter.css";

import leftSvg from "../../assets/svg/left-shape.png";
import rightSvg from "../../assets/svg/right-shape.png";

function Newsletter() {
  return (
    <section className="newsletter">

      {/* Decorative Shapes */}
      <img src={leftSvg} className="newsletter-left-svg1" alt="" />
      <img src={leftSvg} className="newsletter-left-svg2" alt="" />
      <img src={rightSvg} className="newsletter-right-svg" alt="" />

      <div className="container">

        <div className="newsletter-content">

          <h2>
            Subscribe to
            <br />
            our newsletter
          </h2>

          <p>
            To make your stay special and even more memorable
          </p>

          <button>Subscribe Now</button>

        </div>

        <hr />

        <footer className="footer">

          <div className="footer-column">
            <h4>Company</h4>
            <a href="/">Home</a>
            <a href="/">Studio</a>
            <a href="/">Service</a>
            <a href="/">Blog</a>
          </div>

          <div className="footer-column">
            <h4>Terms & Policies</h4>
            <a href="/">Privacy Policy</a>
            <a href="/">Terms & Conditions</a>
            <a href="/">Explore</a>
            <a href="/">Accessibility</a>
          </div>

          <div className="footer-column">
            <h4>Follow Us</h4>
            <a href="/">Instagram</a>
            <a href="/">LinkedIn</a>
            <a href="/">YouTube</a>
            <a href="/">Twitter</a>
          </div>

          <div className="footer-column">
            <h4>Contact</h4>
            <p>1498 W Fulton St.</p>
            <p>2D Chicago, IL 63867</p>
            <p>(123) 456-7890</p>
            <p>info@elementum.com</p>
          </div>

        </footer>

        <p className="copyright">
          ©2023 Elementum. All Rights Reserved.
        </p>

      </div>

    </section>
  );
}

export default Newsletter;