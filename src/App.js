import "./Styling/Config.scss";
import Consultation from "./Pages/Consultation/Consultation";
import { Route, Routes } from "react-router-dom";
import Payment from "./Pages/Payment/Payment";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Routes>
          <Route path="/" element={<Consultation />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="*" element={<h1>404</h1>} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
