import "./Offer.css";
import { FiArrowUpRight } from "react-icons/fi";
import wave from "../../assets/svg/offer.png";   // <-- SVG

const offers = [
  {
    id: 1,
    small: "Office of multiple interest content",
    title: "Collaborative & partnership",
  },
  {
    id: 2,
    small: "The hanger US Air force digital experimental",
    title: "We talk about our weight",
  },
  {
    id: 3,
    small: "Delta faucet content, social, digital",
    title: "Piloting digital confidence",
  },
];

function Offer() {
  return (
    <section className="offer">

      {/* Wave */}
      <img src={wave} alt="" className="offer-wave" />

      <div className="container">

        <h2 className="offer-heading">
          What we <span>can</span>
          <br />
          offer you!
        </h2>

        <div className="offer-list">
          {offers.map((offer) => (
            <div className="offer-row" key={offer.id}>

              <div className="offer-small">{offer.small}</div>

              <div className="offer-title">{offer.title}</div>

              <div className="offer-arrow">
                <FiArrowUpRight />
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Offer;