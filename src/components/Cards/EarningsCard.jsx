import { FiBriefcase, FiArrowUp } from "react-icons/fi";
import './Cards.css'
const EarningsCard = () => {
  return (
    <div className="earnings-card">
      <div className="card-shape shape-1"></div>
      <div className="card-shape shape-2"></div>

      <div className="earnings-top">
        <div className="earnings-icon">
          <FiBriefcase />
        </div>

        <button className="more-btn">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      <div className="earnings-content">
        <div className="amount-row">
          <h2>$500.00</h2>

          <div className="arrow-circle">
            <FiArrowUp />
          </div>
        </div>

        <p>Total Earning</p>
      </div>
    </div>
  );
};

export default EarningsCard;
