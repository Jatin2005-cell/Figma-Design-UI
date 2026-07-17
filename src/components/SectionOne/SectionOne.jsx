import "./SectionOne.css";

import meeting1 from "../../assets/images/SectionOne/meeting1.png";
import pinkShape from "../../assets/svg/pink-shape.png";

function SectionOne() {
  return (
    <section className="section-one">

      <div className="container section-one-container">

        <div className="section-one-content">

          <h2>
  Tomorrow should
  <br />
  be better than <span className="green-bg">today</span>
</h2>
          <p>
            We are a team of strategists, designers,
            communicators, researchers.
            Together, we believe that progress only
            happens when you refuse to play things safe.
          </p>

          <a href="/">Read more</a>

        </div>

        <div className="section-one-image">

          <img
            src={meeting1}
            alt="Meeting"
            className="meeting-img"
          />

          <img
            src={pinkShape}
            alt=""
            className="pink-shape"
          />

        </div>

      </div>

    </section>
  );
}

export default SectionOne;