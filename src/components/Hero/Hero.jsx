import "./Hero.css";
import img1 from "../../assets/svg/vector 2510.png";
import img2 from "../../assets/svg/vector 2511.png";

import person1 from "../../assets/images/person1.png";
import person2 from "../../assets/images/person2.png";
import person3 from "../../assets/images/person3.png";
import person4 from "../../assets/images/person4.png";
import person5 from "../../assets/images/person5.png";
import person6 from "../../assets/images/person6.png";
import person7 from "../../assets/images/person7.png";
import person8 from "../../assets/images/person8.png";

function Hero() {
  return (
    <section className="hero">
       <img src={img1} className="hero-wave-black" alt="" />
  <img src={img2} className="hero-wave-orange" alt="" />
      <div className="container hero-container">

        <h1 className="hero-title">
          The <span className="yellow">thinkers</span> and
          <br />
          doers were <span className="pink">changing</span>
          <br />
          the <span className="green">status</span> Quo with
        </h1>

        <p className="hero-text">
          We are a team of strategists, designers,
          communicators, researchers.
          Together, we believe progress only happens
          when you refuse to play things safe.
        </p>
<div className="team-images">
  <img src={person1} alt="" className="avatar avatar1" />
  <img src={person2} alt="" className="avatar avatar2" />
  <img src={person3} alt="" className="avatar avatar3" />
  <img src={person4} alt="" className="avatar avatar4" />
  <img src={person5} alt="" className="avatar avatar5" />
  <img src={person6} alt="" className="avatar avatar6" />
  <img src={person7} alt="" className="avatar avatar7" />
  <img src={person8} alt="" className="avatar avatar8" />
</div>

      </div>
    </section>
  );
}

export default Hero;