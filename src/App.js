import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Review from "./Pages/ReviewSection/Review";
import Navbar from "./Shared/Navbar";

function App() {
  return (
    <div className="max-w-7xl mx-auto px-12">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="review" element={<Review></Review>}></Route>
      </Routes>
    </div>
  );
}

export default App;
