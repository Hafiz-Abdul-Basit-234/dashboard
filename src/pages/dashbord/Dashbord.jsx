import Navbar from "../../components/nav/Nav"
import"./dashbord.css";
import EarningsCard from "../../components/Cards/EarningsCard";
import OrdersCard from "../../components/Cards/OrdersCard";
import IncomeBlueCard from "../../components/Cards/IncomeBlueCard";
import IncomeWhiteCard from "../../components/Cards/IncomeWhiteCard";
import GrowthChart from "../../components/graph/Graph";
const Dashboard = () => {
  return (
    <>
      <Navbar/>
 <div className="dashboard">

      <div className="top-row">
        <EarningsCard />
        <OrdersCard />
      </div>

      <div className="bottom-row">
        <IncomeBlueCard />
        <IncomeWhiteCard />
      </div>
     </div>

     <GrowthChart/>
    </>
  );
};

export default Dashboard;