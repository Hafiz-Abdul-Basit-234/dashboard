import { Routes, Route } from "react-router-dom";
import Dashbord from "./pages/dashbord/Dashbord";
import Users from "./pages/users/Users";
import Order from "./pages/orders/Order";
import Products from "./pages/products/Products";
const App = () => {
  return (
<>
<Routes>
     <Route path="/" element={<Dashbord />} />
     <Route path="/users" element={<Users />} />
     <Route path="/orders" element={<Order />} />
     <Route path="/products" element={<Products />} />
</Routes>
</>
  )
}

export default App