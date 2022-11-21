import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

import Loading from "../../Shared/Loading";

const AddPost = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  const {
    isLoading,
    data: review,
    refetch,
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
          const articles = {
            author: data?.author,
            title: data?.title,
            description: data?.description,
            url: data?.url,
            urlToImage: img,
            content: data?.content,
            publishedAt: data?.publishedAt,
          };
          //send to your database posting it
          fetch("http://localhost:5000/addpost", {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(articles),
          })
            .then((res) => res.json())
            .then((inserted) => {
              if (inserted.insertedId) {
                toast.success(
                  "Post Has Been Added To The Database, The Backedn Engineer Will Soon Add It to Website"
                );
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
    <div className="mb-5">
      <h2 className="text-2xl text-center mt-5 font-bold">Add Post</h2>
      <div className="flex justify-center mt-5">
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* Author  */}
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Author</span>
            </label>
            <input
              type="text"
              placeholder="Author"
              className="input input-bordered w-full max-w-xs"
              {...register("author", {
                required: {
                  value: true,
                  message: " Author is required",
                },
              })}
            />
            <label className="label">
              {errors.author?.type === "required" && (
                <span className="label-text-alt text-red-500">
                  {errors.author.message}
                </span>
              )}
            </label>
          </div>

          {/* Title  */}
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Title</span>
            </label>
            <input
              type="text"
              placeholder="Title"
              className="input input-bordered w-full max-w-xs"
              {...register("title", {
                required: {
                  value: true,
                  message: "Title is required",
                },
              })}
            />
            <label className="label">
              {errors.title?.type === "required" && (
                <span className="label-text-alt text-red-500">
                  {errors.title.message}
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
              {...register("description", {
                required: {
                  value: true,
                  message: " Description is required",
                },
              })}
            />
            <label className="label">
              {errors.description?.type === "required" && (
                <span className="label-text-alt text-red-500">
                  {errors.description.message}
                </span>
              )}
            </label>
          </div>

          {/* Url  */}
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Url</span>
            </label>
            <input
              type="text"
              placeholder="Url"
              className="input input-bordered w-full max-w-xs"
              {...register("url", {
                required: {
                  value: true,
                  message: " URL is required",
                },
              })}
            />
            <label className="label">
              {errors.url?.type === "required" && (
                <span className="label-text-alt text-red-500">
                  {errors.url.message}
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

          {/* Content  */}
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Content</span>
            </label>
            <input
              type="text"
              placeholder="Content"
              className="input input-bordered w-full max-w-xs"
              {...register("content", {
                required: {
                  value: true,
                  message: " Content is required",
                },
              })}
            />
            <label className="label">
              {errors.content?.type === "required" && (
                <span className="label-text-alt text-red-500">
                  {errors.content.message}
                </span>
              )}
            </label>
          </div>

          {/* Published At  */}
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Published At</span>
            </label>
            <input
              type="date"
              placeholder="Content"
              className="input input-bordered w-full max-w-xs"
              {...register("publishedAt", {
                required: {
                  value: true,
                  message: " Date is required",
                },
              })}
            />
            <label className="label">
              {errors.publishedAt?.type === "required" && (
                <span className="label-text-alt text-red-500">
                  {errors.publishedAt.message}
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

export default AddPost;
