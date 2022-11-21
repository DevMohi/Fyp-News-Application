import React from "react";

const Faq = () => {
  return (
    <div className="py-10">
      <div class="card w-100 bg-base-100 shadow-xl">
        <div class="card-body">
          <h1 className="font-bold">Dos and Dont's</h1>
          <h1>
            Please Follow The Instructions According to that given in the Home
            Page, This is a very easy to use website, made to enhance your user
            experience and get rid of complicated news websites.
          </h1>
        </div>
      </div>
      <div class="card w-100 bg-base-100 shadow-xl mt-5">
        <div class="card-body">
          <h1 className="font-bold">
            What Happens If you dont follow the Instructions?
          </h1>
          <h1>
            Ans: The Answer is it wont work, since the website is in its beta
            mode, its quite hard to provide all of the functionalities. Please
            Bear With Us Till We Implement All of them.
          </h1>
        </div>
      </div>
      <div class="card w-100 bg-base-100 shadow-xl mt-5">
        <div class="card-body">
          <h1 className="font-bold">
            IF I Cant Operate The Website, whom should i contact?
          </h1>
          <h1>
            Ans: IF you are having problems with using the website or
            interacting with the AI, please let us know in the contact us page,
            We will try to guide you and reach you within 2hours.
          </h1>
        </div>
      </div>
      <div class="card w-100 bg-base-100 shadow-xl mt-5">
        <div class="card-body">
          <h1 className="font-bold">Common Problems</h1>
          <h1>
            Ans: One of the Common Problem With the App is , it is in its beta
            version, so you might to reload in order to get data, as the ai has
            some issues with fetching. However reloading will fix the error.
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Faq;
