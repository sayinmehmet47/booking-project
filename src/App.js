import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import List from "./list/List";
import Hotel from "./hotel/Hotel";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hotels" element={<List />} />
        <Route path="/hotels/:id" element={<Hotel />} />
      </Routes>
    </div>
  );
}

export default App;
