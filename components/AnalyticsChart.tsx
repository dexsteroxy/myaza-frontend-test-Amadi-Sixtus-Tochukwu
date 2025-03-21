import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const AnalyticsChart = () => {
  // State to track which month is being hovered
  const [hoveredMonth, setHoveredMonth] = useState<number | null>(null);


  // Data for chart - heights matched exactly with image (already above 10K baseline)
  const chartData = [
    { month: 'Jan', income: 35, outcome: 25, total: 45456.9 },
    { month: 'Feb', income: 25, outcome: 33, total: 99456.9 },
    { month: 'Mar', income: 29, outcome: 22, total: 1456.9 },
    { month: 'Apr', income: 20, outcome: 25, total: 332456.9 },
    { month: 'May', income: 42, outcome: 30, total: 75456.9 },
    { month: 'Jun', income: 22, outcome: 27, total: 84456.9 },
    { month: 'Jul', income: 23, outcome: 27, total: 5456.9 },
    { month: 'Aug', income: 22, outcome: 27, total: 64456.9 }
  ];

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

 

  const tooltipVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.2 } }
  };

  return (
    <motion.div 
      className="bg-[#1D1D41] rounded-lg p-6"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold text-white">Analytics</h2>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <div className="h-3 w-3 rounded-full bg-[#675AFF]"></div>
            <span className="text-sm text-gray-400">Income</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="h-3 w-3 rounded-full bg-[#66E2DC]"></div>
            <span className="text-sm text-gray-400">Outcome</span>
          </div>
          <button className="bg-[#1B1B3B] border border-[#CBC8FF] text-white text-sm px-3 py-1 rounded flex items-center gap-1">
            2020 <ChevronDown size={14} />
          </button>
        </div>
      </div>

      <div className="h-64 pb-8"> {/* Added padding at bottom for month labels */}
        <div className="h-full flex flex-col relative">
          {/* Chart area */}
          <div className="flex-1 relative">
            {/* Y-axis labels */}
            <div className="absolute left-0 top-0 h-full flex flex-col justify-between text-xs text-gray-400">
              <span>50K</span>
              <span>40K</span>
              <span>30K</span>
              <span>20K</span>
              <span>10K</span>
            </div>
            
            {/* Dashed horizontal grid lines */}
            <div className="absolute left-6  top-0 w-full h-full">
              {[0, 1, 2, 3, 4].map((index) => (
                <div 
                  key={index}
                  className="w-full bg-[#8C89B480] absolute"
                  style={{ top: `${index * 25}%` }}
                >
                  <div className="w-full border-t border-dashed border-gray-700"></div>
                </div>
              ))}
            </div>
            
            {/* Chart bars - positioned on the 10K line */}
            <div className="w-full h-full pl-10 flex items-end justify-between pb-0">
              {chartData.map((data, index) => (
                <div 
                  key={index}
                  className="flex cursor-pointer items-end justify-center gap-4 relative h-full"
                  onMouseEnter={() => setHoveredMonth(index)}
                  onMouseLeave={() => setHoveredMonth(null)}
                >
                  <AnimatePresence>
                    {hoveredMonth === index && (
                      <motion.div
                        className="absolute -top-3 w-32 bg-[#3B3B76] text-white p-2- rounded-lg z-10 shadow-lg"
                        variants={tooltipVariants}
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                      >
                        <div className="text-sm text-center font-medium mb-1">{data.month} 2020</div>
                        <div className="text-lg text-center font-semibold">${data.total.toLocaleString('en-US', { minimumFractionDigits: 1, maximumFractionDigits: 1 })}</div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                  
                  {/* Position each bar separately on the 10K line */}
                  <motion.div
                    className="w-2 bg-[#64CFF6] rounded-t"
                    style={{ height: `${data.outcome * 2.4}px` }}
                    initial={{ height: 0 }}
                    animate={{ height: `${data.outcome * 2.4}px` }}
                    transition={{ duration: 0.5, delay: index * 0.05 }}
                  ></motion.div>
                  
                  <motion.div
                    className="w-2 bg-[#675AFF] rounded-t"
                    style={{ height: `${data.income * 2.4}px` }}
                    initial={{ height: 0 }}
                    animate={{ height: `${data.income * 3.4}px` }}
                    transition={{ duration: 0.5, delay: index * 0.05 }}
                  ></motion.div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Month labels below the chart */}
          <div className="h-8 pl-10 flex justify-between">
            {chartData.map((data, index) => (
              <div key={index} className="flex-1 text-center">
                <span className="text-xs text-gray-400">{data.month}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default AnalyticsChart;