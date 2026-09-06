import { FiShoppingBag, FiArrowDown } from "react-icons/fi";
import './Cards.css'
const OrderCard = () => {
  return (
    <div className="order-card">

      {/* background circles */}
      <div className="order-circle order-circle-1"></div>
      <div className="order-circle order-circle-2"></div>

      {/* top */}
      <div className="order-header">
        <div className="order-icon">
          <FiShoppingBag />
        </div>

        <div className="order-tabs">
          <span>Month</span>
          <button>Year</button>
        </div>
      </div>

      {/* amount */}
      <div className="order-info">
        <div className="order-number">
          <h2>$961</h2>

          <div className="order-arrow">
            <FiArrowDown />
          </div>
        </div>

        <p>Total Order</p>
      </div>

      {/* GRAPH */}
      <svg
        className="order-graph"
        viewBox="0 0 200 75"
        preserveAspectRatio="none"
      >
        <path
          d="
            M 0 39
            C 12 36, 20 29, 30 32
            C 43 36, 47 67, 58 68
            C 69 69, 73 34, 84 22
            C 94 11, 105 29, 113 28
            C 124 27, 128 17, 138 10
            C 149 2, 157 28, 168 34
            C 179 40, 186 29, 200 10
          "
          fill="none"
          stroke="#ffffff"
          strokeWidth="3.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>

    </div>
  );
};

export default OrderCard;
