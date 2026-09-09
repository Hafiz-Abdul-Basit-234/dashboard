import { Routes, Route } from "react-router-dom";
import Dashbord from "./pages/dashbord/Dashbord";
import Users from "./pages/users/Users";
import Order from "./pages/orders/Order";
const App = () => {
  return (
<>
<Routes>
     <Route path="/" element={<Dashbord />} />
     <Route path="/users" element={<Users />} />
     <Route path="/orders" element={<Order />} />
</Routes>
</>
  )
}

export default App