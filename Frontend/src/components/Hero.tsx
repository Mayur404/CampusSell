import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
// import { motion } from 'framer-motion';

const Hero = () => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const fullText = 'simplified....';

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!isDeleting && text.length < fullText.length) {
        setText(fullText.slice(0, text.length + 1));
      } else if (!isDeleting && text.length === fullText.length) {
        setTimeout(() => setIsDeleting(true), 500);
      } else if (isDeleting && text.length > 0) {
        setText(fullText.slice(0, text.length - 1));
      } else if (isDeleting && text.length === 0) {
        setIsDeleting(false);
      }
    }, isDeleting ? 100 : 150);

    return () => clearTimeout(timer);
  }, [text, isDeleting]);

  return (
    <section className="h-screen w-full bg-[#FFFDF2]">
      
      <div className="flex flex-col text-center items-center justify-center text-[#1A1A1A] uppercase pt-28 gap-2 px-4">

        <p className='tagLine text-2xl mx-auto text-black/70 pb-8
          max-sm:text-lg
          max-md:text-xl'>
          Connect with fellow students to get best deals on campus
        </p>

        <h1 className='tracking-wider text-8xl
          max-sm:text-4xl
          max-md:text-6xl'>
          your campus marketplace
        </h1>

        <h1 className="min-h-[1.5em] pt-5 text-8xl tracking-wider
          max-sm:text-4xl
          max-md:text-6xl">
          {text}
          <span className="animate-pulse text-[#444444]">|</span>
        </h1>

        <div className="pt-8 mt-10 flex flex-col sm:flex-row gap-5 justify-center items-center">
  
          {/* Buy Button */}
          <Link
            to="/buy"
            className="relative px-8 py-4 rounded-xl font-semibold text-[#111111]
                      bg-[#FFF6E5] border border-black
                      transition-all duration-300
                      hover:-translate-y-1
                      hover:shadow-[0_0_25px_rgba(0,0,0,0.15)]"
          >
            View listings
          </Link>

          {/* Sell Button */}
          <Link
            to="/login"
            className="relative px-8 py-4 rounded-xl font-semibold text-[#FFF6E5]
                      bg-[#111111]
                      transition-all duration-300
                      hover:-translate-y-1
                      hover:shadow-[0_0_30px_rgba(0,0,0,0.35)]"
          >
            Sell an Item
          </Link>

        </div>
        
      </div>
    </section>
  ) 
}

export default Hero;