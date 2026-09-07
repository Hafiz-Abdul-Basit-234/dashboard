import { Routes, Route } from "react-router-dom";
import Dashbord from "./pages/dashbord/Dashbord";
import Users from "./pages/users/Users";
const App = () => {
  return (
<>
<Routes>
     <Route path="/" element={<Dashbord />} />
     <Route path="/users" element={<Users />} />
</Routes>
</>
  )
}

export default App