import axios from "axios";
import React, { useEffect, useState } from "react";
import { motion } from "motion/react";
import { spring } from "motion";

function Library() {
  const [bookData, setBookData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  useEffect(() => {
    axios({
      method: "get",
      url: "https://openlibrary.org/search.json?q=the+lord+of+the+rings&limit=20",
    })
      .then((response) => {
        setBookData(response.data.docs);
        console.log(response.data.docs);
      })
      .catch((err) => {
        console.log(err);
        setError("Error in loading the books, check your connection");
      })
      .finally(() => {
        return setLoading(false);
      });
  }, []);

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="flex items-center gap-2 pt-10">
        <div className="bg-background h-1 w-[30px]"></div>
        <h1 className="font-bold text-6xl text-background">Library</h1>
      </div>

      <div className="pl-10 pt-10 pr-10 flex flex-col gap-10">
        {loading && (
          <div className="flex items-center justify-center">
            <span className="loading loading-infinity loading-xs"></span>
            <span className="loading loading-infinity loading-sm"></span>
            <span className="loading loading-infinity loading-md"></span>
            <span className="loading loading-infinity loading-lg"></span>
            <span>Loading please wait..</span>
          </div>
        )}
        <div className="flex flex-row items-center justify-center gap-10 flex-wrap w-[100%]">
          {bookData.length > 0 ? (
            bookData.map((book, index) => {
              return (
                <div className="">
                  <motion.div
                    initial={{
                      opacity: 0,
                      scale: 0,
                      justifyItems: "left",
                    }}
                    animate={{
                      opacity: 1,
                      scale: 1,
                    }}
                    whileInView={{
                      justifyItems: "center",
                    }}
                    transition={{
                      duration: 0.4,
                      scale: { type: spring, visualDuration: 0.4, bounce: 0.5 },
                    }}
                    key={index}
                    className="card glass w-96 max-sm:w-fit"
                  >
                    {/* <p>{book.title}</p> */}
                    <figure>
                      <motion.img
                        whileHover={{
                          rotate: 90,
                          overflow: "visible",
                          transition: { duration: 0.5 },
                        }}
                        src={`https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`}
                        alt="cover"
                        className="w-fit h-[250px]"
                      />
                    </figure>
                    <div className="card-body">
                      <h2 className="card-title">{book.title}</h2>
                      <p>Author: {book.author_name}</p>
                      <div className="card-actions justify-end">
                        <button className="btn btn-primary text-oranges border-oranges">
                          Read More
                        </button>
                      </div>
                    </div>
                  </motion.div>
                </div>
              );
            })
          ) : (
            <p className="italic">{error}</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Library;
