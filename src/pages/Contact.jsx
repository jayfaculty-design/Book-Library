import React from "react";

function Contact() {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="flex items-center gap-2">
        <div className="bg-primary h-1 w-[30px]"></div>
        <h1 className="font-bold text-6xl text-primary">Contact</h1>
      </div>

      <div className="pl-10 pt-10 pr-10">
        <form action="" className="flex flex-col gap-7 w-fit">
          <label className="input input-bordered flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="h-4 w-4 opacity-70"
            >
              <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
            </svg>
            <input
              type="text"
              className="grow w-[500px] max-sm:w-fit"
              placeholder="First Name"
            />
          </label>

          <label className="input input-bordered flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="h-4 w-4 opacity-70"
            >
              <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
            </svg>
            <input
              type="text"
              className="grow w-[500px] max-sm:w-fit"
              placeholder="Last Name"
            />
          </label>
          <textarea
            placeholder="Message"
            className="textarea textarea-bordered textarea-lg  w-[500px] max-w-[500px] max-sm:w-fit"
          ></textarea>

          <button
            type="submit"
            className="btn btn-wide text-primary hover:bg-primary hover:text-background"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
