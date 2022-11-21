import React from "react";
import { FiMail, FiMapPin } from "react-icons/fi";

const Contact = () => {
  return (
    <section
      className="section bg-white lg:h-[700px] flex items-center"
      id="contact"
    >
      <div className="container max-w-7xl mx-auto px-4 ">
        <div className="flex flex-col items-center text-center hidden lg:block">
          <h2 className="section-title before:content-contact relative before:absolute before:opacity-40 before:-top-7 before:-left-40 before:hidden before:lg:block text-4xl text-red-400 font-primary lg:my-0 my-12 lg:mb-12 font-semibold">
            Contact Us
          </h2>
        </div>
        <div className="flex flex-col items-center text-center block lg:hidden">
          <h2 className="section-title before:content-contact relative before:absolute before:opacity-40 before:-top-7 before:-left-40 before:hidden before:lg:block text-4xl text-red-400 font-primary lg:my-0 my-12 lg:mb-12 font-semibold">
            Having Issue? Write to us
          </h2>
        </div>
        <div className="flex flex-col lg:gap-x-8 lg:flex-row ">
          <div className=" w-2/4 flex flex-col items-start space-y-8 mb-12 lg:mb-0 lg:pt-2 hidden lg:block">
            <div className="flex flex-col lg:flex-row gap-x-4 ">
              <div className="text-red-400 rounded-sm w-14 h-14 flex items-start justify-center mt-2 mb-4 lg:mb-0 text-2xl cursor-pointer">
                <FiMail />
              </div>
              <div>
                <h4 className="text-xl mb-1  font-semibold text-red-400">
                  Have a question?
                </h4>
                <p className="mb-1 text-paragraph  text-red-400">
                  Please State Your Issues
                </p>
                <p className="text-red-400 font-normal ">
                  Email us at morphex72@gmail.com
                </p>
              </div>
            </div>
            <div className="flex flex-col lg:flex-row gap-x-4 ">
              <div className="text-red-400 rounded-sm w-14 h-14 flex items-start justify-center mt-2 mb-4 lg:mb-0 text-2xl cursor-pointer">
                <FiMapPin />
              </div>
              <div>
                <h4 className="text-xl mb-1  font-semibold text-red-400">
                  Current Location
                </h4>
                <p className="mb-1 text-paragraph  text-red-400">
                  Selangor, Malaysia
                </p>
                <p className="text-red-400 font-normal ">
                  Serving clients worldwide
                </p>
              </div>
            </div>
          </div>

          <form
            action="https://formspree.io/f/xdobjlwv"
            method="POST"
            className=" w-full h-[400px] "
          >
            <div className="flex gap-x-2">
              <input
                name="Name"
                type="text"
                placeholder="Your name"
                required
                class="input input-bordered w-full  bg-tertiary text-gray-600"
              />
              <input
                name="Email"
                type="email"
                placeholder="Your email"
                required
                class="input input-bordered w-full bg-tertiary text-gray-600"
              />
            </div>
            <div>
              <input
                name="Subject"
                type="text"
                placeholder="Subject"
                class="input input-bordered w-full bg-tertiary my-6 text-gray-600"
              />
            </div>
            <div className="h-1/3 ">
              <textarea
                name="Message"
                required
                class="textarea textarea-bordered w-full bg-tertiary h-full text-gray-600"
                placeholder="Your Message"
              ></textarea>
            </div>
            <div className="my-2 ">
              <button
                type="submit"
                className="cursor-pointer btn text-white bg-red-400 hover:bg-accent-hover transition-all duration-300 rounded-md lg:mt-6 lg:mb-0 mb-6"
              >
                Send message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
