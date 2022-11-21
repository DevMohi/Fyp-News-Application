import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

import Loading from "../../Shared/Loading";

const AddReview = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  const {
    isLoading,
    data: review,
  } = useQuery({
    queryKey: ["review"],
    queryFn: () =>
      fetch("http://localhost:5000/review", {
        method: "GET",
      }).then((res) => res.json()),
  });

  const imageStorageKey = "8d98fde0e8c36f2378f6b542524570b6";

  //Ways to store images in database
  // 1. Third party storage
  // Your own storage in your own server
  //Database: mongodb

  const onSubmit = async (data) => {
    const image = data.image[0];
    //Aita must korte hobe naile image patate parbana
    const formData = new FormData();
    formData.append("image", image);
    const url = `https://api.imgbb.com/1/upload?key=${imageStorageKey}`;
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.success) {
          const img = result.data.url;
          const review = {
            name: data?.name,
            desc: data?.desc,
            rating: data?.rating,
            img: img,
          };
          //send to your database posting it
          fetch("http://localhost:5000/review", {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(review),
          })
            .then((res) => res.json())
            .then((inserted) => {
              if (inserted.insertedId) {
                toast.success("Review Added Succesfully");
                reset();
              } else {
                toast.error("Failed To Add Review");
              }
            });
        }
      });
  };

  if (isLoading) {
    return <Loading></Loading>;
  }

  return (
    <div className="">
      <h2 className="text-2xl text-center mt-5 font-bold">Add Review</h2>
      <div className="flex justify-center mt-5">
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* Name  */}
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              placeholder="Your Name"
              className="input input-bordered w-full max-w-xs"
              {...register("name", {
                required: {
                  value: true,
                  message: " Name is required",
                },
              })}
            />
            <label className="label">
              {errors.name?.type === "required" && (
                <span className="label-text-alt text-red-500">
                  {errors.name.message}
                </span>
              )}
            </label>
          </div>

          {/* Rating  */}
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Rating</span>
            </label>
            <input
              type="number"
              placeholder="Please Input a number within 5"
              min="1"
              max="5"
              className="input input-bordered w-full max-w-xs"
              {...register("rating", {
                required: {
                  value: true,
                  message: "Rating is required",
                },
              })}
            />
            <label className="label">
              {errors.rating?.type === "required" && (
                <span className="label-text-alt text-red-500">
                  {errors.rating.message}
                </span>
              )}
            </label>
          </div>

          {/* Desc  */}
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Description</span>
            </label>
            <input
              type="text"
              placeholder="Description"
              className="input input-bordered w-full max-w-xs"
              {...register("desc", {
                required: {
                  value: true,
                  message: " Description is required",
                },
              })}
            />
            <label className="label">
              {errors.desc?.type === "required" && (
                <span className="label-text-alt text-red-500">
                  {errors.desc.message}
                </span>
              )}
            </label>
          </div>

          {/* Photo  */}
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Photo</span>
            </label>
            <input
              type="file"
              className="input input-bordered w-full max-w-xs"
              {...register("image", {
                required: {
                  value: true,
                  message: " Image is required",
                },
              })}
            />
            <label className="label">
              {errors.image?.type === "required" && (
                <span className="label-text-alt text-red-500">
                  {errors.image.message}
                </span>
              )}
            </label>
          </div>

          <input
            type="submit"
            value="Add"
            className="btn btn-secondary font-bold text-white w-full max-w-xs"
          />
        </form>
      </div>
    </div>
  );
};

export default AddReview;
