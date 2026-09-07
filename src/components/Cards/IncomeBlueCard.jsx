import { FiCreditCard } from "react-icons/fi";
import './Cards.css'
const IncomeBlueCard = () => {
  return (
    <div className="income-blue">
      <div className="income-blue-shape"></div>

      <div className="small-card-icon blue-icon">
        <FiCreditCard />
      </div>

      <div className="small-card-content">
     
        <h2>$203k</h2>
        <p>Total Income</p>
      </div>
    </div>
  );
};

export default IncomeBlueCard;
