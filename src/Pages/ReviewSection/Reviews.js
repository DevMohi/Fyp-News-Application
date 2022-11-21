import React, { useEffect, useState } from "react";
import Review from "./Review";
import { Link } from "react-router-dom";
import Loading from "../../Shared/Loading";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/review")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);
  return (
    <section className="mb-28">
      <div className="flex justify-center my-12">
        <h2 className="text-3xl">What our Customer Says</h2>

        {/* <div>
          <img src={quote} alt="" className="w-24 lg:w-48 " />
        </div> */}
      </div>

      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {reviews.length === 0 ? (
          <Loading />
        ) : (
          reviews
            .map((review) => <Review key={review._id} review={review}></Review>)
            .reverse()
        )}
      </div>
      {/* <div style={{ cursor: "pointer" }} className="mt-3 flex justify-end">
        <Link to="/seereviews">
          <btn className=" btn-link">See All</btn>
        </Link>
      </div> */}
    </section>
  );
};

export default Reviews;
