import React from 'react'
import { motion } from 'framer-motion';
import {  ChevronDown } from 'lucide-react';
import Image from 'next/image';
import activityImage from '@/public/assets/activity.png'
const Activity = () => {

    
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
    variants={itemVariants}
    initial="hidden"
    animate="visible"
  >
    <div className="flex justify-between items-center mb-6">
      <h2 className="text-xl font-semibold text-white">Activity</h2>
      <button className=" border border-[#8C89B4] text-[#8C89B4] text-sm px-3 py-1 rounded-md flex items-center gap-1">
        Month <ChevronDown size={14} />
      </button>
    </div>

   <Image src={activityImage} alt='activityImage' className=' cursor-pointer'/>

    <button className=" border border-[#CBC8FF] text-[#CBC8FF] font-medium text-sm w-full py-2 rounded-md">
      See All Activity
    </button>
  </motion.div>
  )
}

export default Activity