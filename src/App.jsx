import { useRef, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { NavLink } from "react-router";
import { motion, useScroll, useSpring } from "motion/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Books from "./Pages/Books";
import Library from "./Pages/library";
import { faBars, faPhone } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faInstagram,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import Contact from "./Pages/Contact";

const itemVariants = {
  open: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 300, damping: 24 },
  },
  closed: { opacity: 0, y: 20, transition: { duration: 0.2 } },
};

function App() {
  const booksRef = useRef(null);
  const libraryRef = useRef(null);
  const contactRef = useRef(null);
  const homeRef = useRef(null);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="top-container flex justify-between z-[999] p-10 items-center fixed top-0 left-0 w-full bg-blue-500 text-white bg-background">
        <div className="logo">
          <NavLink to="/" end>
            <img src="/images/logo.svg" alt="logo" width={"130px"} />
          </NavLink>
        </div>
        <img
          src="/images/Shape1.svg"
          className="fixed w-[35%] left-28 max-sm:hidden"
          alt="flower-1"
        />
        <img
          src="/images/Shape2.svg"
          className="fixed w-[80px] left-0 top-[40%] max-sm:hidden"
          alt="flower-1"
        />
        <img
          src="/images/Shape3.svg"
          className="fixed w-[150px] left-[23%] bottom-0 max-sm:hidden"
          alt="flower-1"
        />
        <img
          src="/images/Shape4.svg"
          className="fixed w-[80px] right-0 top-[20%] max-sm:hidden"
          alt="flower-1"
        />
        <img
          src="/images/Shape5.svg"
          className="fixed w-[30%] z-[998] right-0 bottom-0 max-sm:hidden"
          alt="flower-1"
        />
        <div className="flex items-center gap-24">
          <div className="nav-bar flex gap-16 font-sans font-bold z-[999] max-sm:hidden">
            <a
              onClick={() => {
                homeRef.current.scrollIntoView({
                  behavior: "smooth",
                });
              }}
              className="text-primary cursor-pointer"
            >
              Home
            </a>
            <a
              onClick={() => {
                booksRef.current.scrollIntoView({
                  behavior: "smooth",
                });
              }}
              className="text-primary cursor-pointer"
              to="/books"
            >
              Books
            </a>
            <a
              onClick={() => {
                libraryRef.current.scrollIntoView({
                  behavior: "smooth",
                });
              }}
              className="text-primary cursor-pointer"
            >
              Library
            </a>
            <a
              onClick={() => {
                contactRef.current.scrollIntoView({
                  behavior: "smooth",
                });
              }}
              className="text-primary cursor-pointer"
            >
              Contact
            </a>
          </div>
          <motion.nav initial={false} animate={isOpen ? "open" : "closed"}>
            <motion.div
              whileTap={{
                scale: 0.97,
              }}
              onClick={() => {
                return setIsOpen((prev) => !prev);
              }}
              className="menu-btn cursor-pointer md:hidden"
            >
              <FontAwesomeIcon icon={faBars} className="text-primary" />
            </motion.div>

            <motion.ul
              className={`mobile-menu hidden ${isOpen ? "show-menu" : ""} `}
              variants={{
                open: {
                  clipPath: "inset(0% 0% 0% 0% round 10px)",
                  transition: {
                    type: "spring",
                    bounce: 0,
                    duration: 0.7,
                    delayChildren: 0.3,
                    staggerChildren: 0.05,
                  },
                },
                closed: {
                  clipPath: "inset(10% 50% 90% 50% round 10px)",
                  transition: {
                    type: "spring",
                    bounce: 0,
                    duration: 0.3,
                  },
                },
              }}
              style={{ pointerEvents: isOpen ? "auto" : "none" }}
            >
              <motion.li
                onClick={() => {
                  homeRef.current.scrollIntoView({
                    behavior: "smooth",
                  });
                }}
                variants={itemVariants}
              >
                Home
              </motion.li>
              <motion.li
                onClick={() => {
                  booksRef.current.scrollIntoView({
                    behavior: "smooth",
                  });
                }}
                variants={itemVariants}
              >
                Books{" "}
              </motion.li>
              <motion.li
                onClick={() => {
                  libraryRef.current.scrollIntoView({
                    behavior: "smooth",
                  });
                }}
                variants={itemVariants}
              >
                Library{" "}
              </motion.li>
              <motion.li
                onClick={() => {
                  contactRef.current.scrollIntoView({
                    behavior: "smooth",
                  });
                }}
                variants={itemVariants}
              >
                Contact{" "}
              </motion.li>
              <div className="flex gap-[5px] pt-5">
                <FontAwesomeIcon icon={faPhone} />
                <FontAwesomeIcon icon={faFacebook} />
                <FontAwesomeIcon icon={faXTwitter} />
                <FontAwesomeIcon icon={faInstagram} />
              </div>
            </motion.ul>
          </motion.nav>

          <div className="search max-sm:hidden">
            <label className="input bg-transparent border-oranges flex items-center gap-2">
              <input
                type="search"
                className="grow placeholder:text-oranges  w-[120px]"
                placeholder="Search"
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="h-4 w-4 opacity-70 text-oranges"
              >
                <path
                  fillRule="evenodd"
                  d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                  clipRule="evenodd"
                />
              </svg>
            </label>
          </div>
        </div>
      </div>

      {/* Section Screen */}

      <motion.div style={{ scaleX }} className="progress-bar" />
      <div
        ref={homeRef}
        className="mid-section flex mt-5 items-center relative p-[150px] max-sm:flex-col max-sm:items-start max-sm:gap-28"
      >
        <div className="text-center w-[50%] flex flex-col items-center gap-5">
          <h1 className="font-serif text-7xl max-sm:text-5xl text-primary tracking-[-4px] font-extrabold max-sm:tracking-[-1px] max-sm:text-left">
            Join Our
            <br /> Reading <br /> Club
          </h1>
          <p className="w-[500px] text-primary leading-8 max-sm:w-[200px] max-sm:text-[16px] max-sm:text-left">
            Explore the collection of the Lord of the Rings Books. Fell free to
            explore in our books and select your choice!
          </p>

          <button className="btn btn-wide text-center bg-oranges border-none hover:bg-primary-content text-white">
            Know more about us
          </button>
        </div>

        <div className="relative right-10 max-sm:w-[250px] max-sm:right-20">
          <motion.img
            whileHover={{
              scale: 1.1,
              rotate: 180,
              transition: { duration: 0.5 },
              cursor: "pointer",
            }}
            src="/images/flowers.svg"
            className="transform scale-x-[-1]"
            alt=""
            width="550px"
          />
        </div>
        <div className="flex flex-col gap-5 text-primary max-sm:hidden">
          <a
            href=""
            className="transform transition-transform duration-300 hover:scale-125"
          >
            <FontAwesomeIcon icon={faPhone} />
          </a>
          <a
            href=""
            className="transform transition-transform duration-300 hover:scale-125"
          >
            <FontAwesomeIcon icon={faFacebook} />
          </a>
          <a
            href=""
            className="transform transition-transform duration-300 hover:scale-125"
          >
            <FontAwesomeIcon icon={faXTwitter} />
          </a>
          <a
            href=""
            className="transform transition-transform duration-300 hover:scale-125"
          >
            <FontAwesomeIcon icon={faInstagram} />
          </a>
        </div>
      </div>

      <motion.div
        initial={{
          backgroundColor: "#4e5341",
          opacity: 0,
        }}
        whileInView={{
          backgroundColor: "#ecdac6",
          opacity: 1,
        }}
        ref={booksRef}
        className="scroll-margin-top mt-[70px] w-[100%] max-sm:pb-10"
      >
        <Books />
      </motion.div>
      <motion.div
        initial={{
          backgroundColor: "#4e5341",
          opacity: 0,
        }}
        whileInView={{
          backgroundColor: "#ecdac6",
          opacity: 1,
        }}
        ref={libraryRef}
        className="scroll-margin-top mt-[70px] pb-10 w-[100%]"
      >
        <Library />
      </motion.div>
      <div ref={contactRef} className="scroll-margin-top mt-[70px] w-[100%]">
        <Contact />
      </div>
      <footer className="footer footer-center bg-primary text-base-content p-4 z-[999]">
        <aside>
          <p>
            Copyright © {new Date().getFullYear()} - All right reserved by Jay
            Webs Limited
          </p>
        </aside>
      </footer>
    </>
  );
}

export default App;
