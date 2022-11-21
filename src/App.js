import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import RequireAuth from "./Pages/Login/RequireAuth";
import SignUp from "./Pages/Login/SignUp";
import AddReview from "./Pages/ReviewSection/AddReview";
import Reviews from "./Pages/ReviewSection/Reviews";
import Navbar from "./Shared/Navbar";
import "react-toastify/dist/ReactToastify.css";
import AddPost from "./Pages/Post/AddPost";

function App() {
  return (
    <div className="max-w-7xl mx-auto px-12">
      <Navbar></Navbar>
      <Routes>
        <Route
          path="/"
          element={
            <RequireAuth>
              <Home></Home>
            </RequireAuth>
          }
        ></Route>
        <Route path="review" element={<Reviews></Reviews>}></Route>
        <Route path="addReview" element={<AddReview></AddReview>}></Route>
        <Route path="addPost" element={<AddPost></AddPost>}></Route>
        <Route path="login" element={<Login></Login>}></Route>
        <Route path="signup" element={<SignUp></SignUp>}></Route>
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
