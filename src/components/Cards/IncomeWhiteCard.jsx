import { FiShoppingBag } from "react-icons/fi";
import './Cards.css'
const IncomeWhiteCard = () => {
  return (
    <div className="income-white">
      <div className="income-white-shape"></div>

      <div className="small-card-icon yellow-icon">
        <FiShoppingBag />
      </div>

      <div className="small-card-content">
        <h2>$203k</h2>
        <p>Total Income</p>
      </div>
    </div>
  );
};

export default IncomeWhiteCard;
