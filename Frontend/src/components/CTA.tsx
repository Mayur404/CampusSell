import Button from "../assets/button.tsx";
import { easeInOut, motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Cta() {
  return (
    <div className="w-full bg-[#FFFDF2] py-16 md:py-24 lg:py-32 flex flex-col items-center justify-center text-center px-4 md:px-8">
      
      <motion.h1 
        className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-8 md:mb-12 tracking-wide max-w-5xl leading-tight"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: easeInOut }}
      >
        Ready to start buying and selling on campus?
      </motion.h1>

      <motion.div 
        className="mt-4 md:mt-8 scale-100 sm:scale-110 md:scale-125"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: easeInOut }}
      >
        <Link to="/login">
          <Button />
        </Link>
      </motion.div>
    </div>
  );
}