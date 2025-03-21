import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import card from '@/public/assets/Card.png'
const Card = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };

  return (
    <motion.div 
      className="bg-[#1D1D41] rounded-lg p-6"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <h2 className="text-[24px] font-semibold text-white mb-4 leading-[100%]">My Card</h2>
      
      <div className="mb-6">
        <div className="text-[#8C89B4] mb-3 text-[16px] leading-[100%] ">Card Balance</div>
        <div className="text-[24px] font-semibold text-white leading-[100%]">$15,595.015</div>
      </div>

      {/* Credit Card */}
      <Image src={card} alt='atm card' className=' mb-4'/>

      {/* Page indicators */}
      <div className="flex justify-center gap-2 mb-6">
        <div className="w-8 h-2 bg-gray-300 rounded-full"></div>
        <div className="w-2 h-2 bg-gray-600 rounded-full"></div>
        <div className="w-2 h-2 bg-gray-600 rounded-full"></div>
      </div>

      {/* Buttons */}
      <div className="flex gap-4">
        <motion.button 
          className=" bg-[#CBC8FF] w-[160px] text-[14px] rounded-[8px] h-[38px]"
          variants={itemVariants}
        >
          Manage Cards
        </motion.button>
        <motion.button 
          className="bg-transparent border text-[14px] border-[#CBC8FF] text-white w-[160px] rounded-[8px] h-[38px]"
          variants={itemVariants}
        >
          Transfer
        </motion.button>
      </div>
    </motion.div>
  );
};

export default Card;