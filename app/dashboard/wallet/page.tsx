
"use client"
import React from 'react'
import { motion } from 'framer-motion'
import { Search, Plus, MoreHorizontal } from 'lucide-react';
import Sidebar from '@/components/Sidebar';
import country1 from '@/public/icons/gp1.png'
import country2 from '@/public/icons/gp4.png'
import country3 from '@/public/icons/GBP.png'
import emo1 from '@/public/assets/emo2.png'
import Image from 'next/image';
interface WalletData {
  type: string;
  currency: string;
  balance: number;
  icon: React.ReactNode;
}

interface Transaction {
  name: string;
  date: string;
  description: string;
  amount: number;
  status: string;
}

const WalletPage = () => {

  const wallets: WalletData[] = [
    {
      type: 'NGN',
      currency: 'Wallet',
      balance: 245800.89,
      icon: (
       <Image src={country3} alt='country logo' />
      ),
    },
    {
      type: 'GBP',
      currency: 'Wallet',
      balance: 245800.89,
      icon: (
        <Image src={country2} alt='country logo' />
      ),
    },
    {
      type: 'USD',
      currency: 'Wallet',
      balance: 245800.89,
      icon: (
        <Image src={country1} alt='country logo' />
      ),
    },
  ];

  const transactions: Transaction[] = [
    {
      name: 'Adobe After Effect',
      date: 'Sat,20 Apr 2020',
      description: 'Adobe after Virtual Card top-up',
      amount: 80.09,
      status: 'Deposited',
    },
    {
      name: 'Adobe After Effect',
      date: 'Sat,20 Apr 2020',
      description: 'Adobe after Virtual Card top-up',
      amount: 80.09,
      status: 'Deposited',
    },
    {
      name: 'Adobe After Effect',
      date: 'Sat,20 Apr 2020',
      description: 'Adobe after Virtual Card top-up',
      amount: 80.09,
      status: 'Deposited',
    },
    {
      name: 'Adobe After Effect',
      date: 'Sat,20 Apr 2020',
      description: 'Adobe after Virtual Card top-up',
      amount: 80.09,
      status: 'Deposited',
    },
    {
      name: 'Adobe After Effect',
      date: 'Sat,20 Apr 2020',
      description: 'Adobe after Virtual Card top-up',
      amount: 80.09,
      status: 'Deposited',
    },
  ];

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
  };

  return (
    <div className="flex min-h-screen bg-[#141332]">
      {/* Sidebar */}
      <div className="hidden lg:flex">
        <Sidebar />
      </div>

      {/* Main Content */}
      <motion.div 
        className="flex-1 p-6"
        initial="hidden"
        animate="visible"
        variants={fadeIn}
      >
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div>
            <h1 className="text-white text-2xl font-bold">My wallets</h1>
            <p className="text-gray-400 text-sm mt-1">Manage all your wallets from here</p>
          </div>
          
          {/* Search */}
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

        {/* Balance Card */}
        <motion.div 
          className="bg-[#1D1D41] rounded-xl p-6 mb-8"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.1 }}
        >
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
            <div>
              <p className="text-gray-400 mb-2">Your consolidated balance</p>
              <h2 className="text-white text-3xl font-bold">${Number(34780267.08).toLocaleString('en-US', {minimumFractionDigits: 2})}</h2>
            </div>
            <div className="mt-4 md:mt-0 flex">
              <button className="bg-[#CBC8FF] py-2 px-4 rounded-lg flex items-center">
                <Plus size={18} className="mr-2" />
                Add New Wallet
              </button>
              <button className="ml-2 bg-[#1b1a3f] border border-[#CBC8FF] text-white p-2 rounded-full">
                <MoreHorizontal size={18} />
              </button>
            </div>
          </div>

          {/* Wallet Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
            {wallets.map((wallet, index) => (
              <motion.div 
                key={wallet.type}
                className="bg-[#1D1D41] rounded-lg p-4 border border-[#8477FF]"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.1 + (index * 0.1) }}
              >
                <div className="flex items-center">
                  {wallet.icon}
                  <div className="ml-3">
                    <h3 className="text-white font-medium">{wallet.type} {wallet.currency}</h3>
                    <p className="text-gray-400 text-sm">Balance: {Number(wallet.balance).toLocaleString('en-US', {minimumFractionDigits: 2})}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Transactions */}
        <motion.div 
          className="bg-[#1D1D41] rounded-xl p-6"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-white text-xl font-bold">Recent transactions</h3>
            <button className="text-[#8C89B4] text-sm">See All</button>
          </div>

          <div className="overflow-x-auto w-full">
            <table className="min-w-full overflow-hidden ">
              <thead>
                <tr className="text-left text-[#8C89B4] text-sm whitespace-nowrap">
                  <th className="pb-4 font-medium">Name</th>
                  <th className="pb-4 font-medium">Date</th>
                  <th className="pb-4 font-medium">Description</th>
                  <th className="pb-4 font-medium">Amount</th>
                  <th className="pb-4 font-medium pl-2">Status</th>
                </tr>
              </thead>
              <tbody>
                {transactions.map((transaction, index) => (
                  <tr key={index} className="text-sm border-t border-[#32305e]">
                    <td className="py-4 px-1 md:px-0">
                      <div className="flex items-center gap-2">
                       <Image src={emo1} alt=''/>
                        <span className="text-white">{transaction.name}</span>
                      </div>
                    </td>
                    <td className="py-4 px-1 md:px-0 text-gray-100">{transaction.date}</td>
                    <td className="py-4 px-1 md:px-0 text-gray-100">{transaction.description}</td>
                    <td className="py-4 px-1 md:px-0 text-white">${transaction.amount}</td>
                    <td className="py-4 px-1 md:px-0">
                      <span className="text-green-500 bg-green-900 p-1 rounded-full">{transaction.status}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default WalletPage;