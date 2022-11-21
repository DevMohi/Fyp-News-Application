import React from "react";

const Instructions = ({ info }) => {
  return (
    <div>
      <div class="card lg:max-w-lg bg-base-100 shadow-xl ">
        {/* <figure>
        <img src="https://placeimg.com/400/225/arch" alt="Shoes" />
      </figure> */}
        <div class="card-body">
          <h2 class="card-title font-bold">{info.title}</h2>
          <p>
            <strong>{info.title.split(" ")[2]}</strong>: <br />
            {info.info}
          </p>
          <p>
            <strong>Try Saying: </strong>: <br />
            <i className="text-red-400 font-bold">{info.text}</i>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Instructions;
