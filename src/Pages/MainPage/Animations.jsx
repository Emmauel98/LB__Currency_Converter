import {  motion } from "framer-motion";
import "./mainPage.css";

const Animations = () => {
  return (
    <motion.div
      className="bg-black h-screen w-screen
    "
    >
      <h1
        className="zoomInLeft text-white flex justify-center items-center h-screen
       text-[2.5rem] relative
       "
      >
        Lithuania
        <motion.span
          className="text-white text-[1rem] hidden"
          animate={{
            x: 70,
            display: "block",
            transition: {
              ease: "easeOut",
              duration: 2,
              delay: 3,
            },
          }}
          initial={{
            display: "hidden",
            // x: -100,
            position: 'absolute',
            left: '50vw',
            transition: {
              ease: "easeOut",
              duration: 2,
              delay: 13,
            },
          }}
        >
          Currency converter
        </motion.span>
      </h1>
    </motion.div>
  );
};

export default Animations;
