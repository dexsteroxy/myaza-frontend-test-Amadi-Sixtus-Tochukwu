"use client";
import React from "react";
import { motion } from "framer-motion";
import { Search } from "lucide-react";

import Sidebar from "@/components/Sidebar";
import Card from "@/components/Card";
import AnalyticsChart from "@/components/AnalyticsChart";
import Transactions from "@/components/Transactions";
import Activity from "@/components/Activity";
import downArrow from "@/public/icons/arrow-up.png";
import upArrow from "@/public/icons/arrowu.png";
import Image from "next/image";

const HomeDashboard = () => {
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <div className="flex min-h-screen bg-[#141332]">
      {/* Sidebar */}
      <div className="hidden lg:flex">
        <Sidebar />
      </div>

      {/* Main Content */}
      <div className="flex-1 p-8 overflow-y-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div>
            <h1 className="text-2xl font-semibold text-white">
              Welcome Back, Ali 👋
            </h1>
            <p className="text-gray-400 mt-1 mb-3 md:mb-0">
              Here's what's happening with your store today.
            </p>
          </div>
          <div className="relative">
            <input
              type="text"
              placeholder="Search for anything..."
              className="bg-[#1D1D41] text-white pr-10  outline-none focus:border focus:border-[#CBC8FF] pl-4 py-2 rounded-lg w-[300px]"
            />
            <Search
              className="absolute right-3 top-2.5 text-gray-400"
              size={18}
            />
          </div>
        </div>

        <div className="grid md:grid-cols-3 grid-cols-1 gap-6">
          {/* Main Dashboard Content */}
          <div className="col-span-2 space-y-6">
            {/* Income and Outcome Cards */}
            <div className="grid grid-cols-2 gap-6">
              <motion.div
                className="bg-[#1D1D41] rounded-lg p-6"
                variants={itemVariants}
                initial="hidden"
                animate="visible"
              >
                <div className="flex items-center gap-4 mb-2">
                  <div className="bg-[#64CFF6] p-2 rounded">
                    <Image src={downArrow} alt="arrow" />
                  </div>
                  <span className="text-gray-400">Total Income</span>
                </div>
                <div className="flex items-center justify-between">
                  <h2 className="md:text-2xl font-bold text-white">$632.000</h2>
                  <span className="text-green-500 bg-green-900 rounded-full">+1.29%</span>
                </div>
              </motion.div>

              <motion.div
                className="bg-[#1D1D41] rounded-lg p-6"
                variants={itemVariants}
                initial="hidden"
                animate="visible"
              >
                <div className="flex items-center gap-4 mb-2">
                  <div className="bg-[#6359E9] p-2 rounded">
                    <Image src={upArrow} alt="arrow" />
                  </div>
                  <span className="text-gray-400">Total Outcome</span>
                </div>
                <div className="flex items-center justify-between">
                  <h2 className="md:text-2xl font-bold text-white">$632.000</h2>
                  <span className="text-red-500 bg-red-900 rounded-full">+1.29%</span>
                </div>
              </motion.div>
            </div>

            {/* Analytics Chart */}
            <AnalyticsChart />

            {/* Transactions */}
            <Transactions />
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            {/* My Card */}
            <Card />

            {/* Activity */}
            <Activity />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeDashboard;
