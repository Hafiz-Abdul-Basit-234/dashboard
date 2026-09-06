import { Routes, Route } from "react-router-dom";
import Dashbord from "./pages/dashbord/Dashbord";
const App = () => {
  return (
<>
<Routes>
     <Route path="/" element={<Dashbord />} />
</Routes>
</>
  )
}

export default App