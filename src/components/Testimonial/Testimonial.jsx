import "./Testimonial.css";

import p1 from "../../assets/testimonials/p1.png";
import p2 from "../../assets/testimonials/p2.png";
import p3 from "../../assets/testimonials/p3.png";
import p4 from "../../assets/testimonials/p4.png";
import p5 from "../../assets/testimonials/p5.png";
import p6 from "../../assets/testimonials/p6.png";
import p7 from "../../assets/testimonials/p7.png";

function Testimonial() {
  return (
    <section className="testimonial">

      <div className="container">

        <h2 className="testimonial-title">
          <span className="highlight">What</span> our customer
          <br />
          says <span className="underline">About Us</span>
        </h2>

        <div className="testimonial-layout">

          {/* LEFT */}

          <div className="left-images">
            <img src={p1} className="small" alt="" />
            <img src={p2} className="medium" alt="" />
            <img src={p3} className="small" alt="" />
          </div>

          {/* CENTER */}

          <div className="testimonial-center">

            <img src={p7} className="top-avatar" alt="" />

            <div className="review-card">

              <span className="quote left">❝</span>

              <p>
                Elementum delivered the site with the timeline as they
                requested. In the end, the client found a 50% increase
                in traffic within days since its launch. They also had
                an impressive ability to use technologies that the
                company hadn't used, which have also proved to be easy
                to use and reliable.
              </p>

              <span className="quote right">❞</span>

            </div>

          </div>

          {/* RIGHT */}

          <div className="right-images">
            <img src={p4} className="small" alt="" />
            <img src={p5} className="small" alt="" />
            <img src={p6} className="large" alt="" />
          </div>

        </div>

      </div>

    </section>
  );
}

export default Testimonial;