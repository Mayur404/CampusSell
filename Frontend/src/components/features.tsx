import { motion } from "framer-motion";
import Card from "../assets/cards.tsx"
import buyImg from "../assets/buy.png"
import sellImg from "../assets/sell.png"
import connectImg from "../assets/connect.png"

const Features = () => {
  return (
    <div className="w-full min-h-screen py-16 md:py-24 px-4 md:px-8 ">
      
      {/* Heading */} 
      <div className="max-w-7xl mx-auto mb-12 md:mb-20">
        <motion.h1
          className="feature-heading text-[#1A1A1A] text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight"
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          // viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          Here's How Campus Sell Helps You
        </motion.h1>
      </div>

      {/* Card Container */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 lg:gap-16">
        
        {/* CARD 1 */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          // viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
        >
          <Card
            image={buyImg}
            title="Buy"
            subtitle="Find affordable used items instantly"
          />
        </motion.div>

        {/* CARD 2 */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          // viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
        >
          <Card
            image={sellImg}
            title="Sell"
            subtitle="Sell to students with zero hassle"
          />
        </motion.div>

        {/* CARD 3 */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          // viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
          className="md:col-span-2 lg:col-span-1 md:mx-auto lg:mx-0"
        >
          <Card
            image={connectImg}
            title="Connect"
            subtitle="No middlemen. No Scams. Just students"
          />
        </motion.div>
      </div>

    </div>
  );
};

export default Features;