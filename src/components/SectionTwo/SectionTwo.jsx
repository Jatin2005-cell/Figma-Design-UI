import "./SectionTwo.css";

import meeting2 from "../../assets/images/SectionTwo/meeting2.png";
import triangle from "../../assets/svg/triangle.png";
import wave from "../../assets/svg/middle-wave.png";

function SectionTwo() {
  return (
    <section className="section-two">

      <img src={wave} alt="" className="wave" />

      <div className="container section-two-container">

        <div className="section-two-image">

          <img
            src={triangle}
            alt=""
            className="triangle-left"
          />

          <img
            src={meeting2}
            alt="Meeting"
            className="meeting-two"
          />
           <img
            src={triangle}
            alt=""
            className="triangle-right"
          />

        </div>

        <div className="section-two-content">

          <h2>
            <span className="green-bg">See</span> how we can
            <br />
            help you progress
          </h2>

          <p>
            We add a layer of fearless insights and action
            that allows change makers to accelerate their
            progress in areas such as brand, design,
            digital, comms and social research.
          </p>

          <a href="/">Read more</a>

        </div>

      </div>

    </section>
  );
}

export default SectionTwo;