import React from 'react'
import {motion} from 'framer-motion'
import emo1 from '@/public/assets/emo1.png'

import Image from 'next/image'
const Transactions = () => {
    interface Transaction {
        name: string;
        icon: string;
        date: string;
        amount: string;
        status: string;
      }
 // Sample data for transactions
 const transactions: Transaction[] = [
    { name: 'Adobe After Effect', icon: 'A', date: 'Sat,20 Apr 2020', amount: '$80.09', status: 'Deposited' },
    { name: 'McDonald\'s', icon: 'M', date: 'Sun,20 Apr 2021', amount: '$80.09', status: 'Deposited' },
    { name: 'Levi', icon: 'L', date: 'Mon,20 Apr 2022', amount: '$80.09', status: 'Deposited' },
    { name: 'Adobe After Effect', icon: 'A', date: 'Thur,20 Apr 2024', amount: '$80.09', status: 'Deposited' },
    { name: 'Levi', icon: 'L', date: 'Sat,20 Apr 2020', amount: '$80.09', status: 'Deposited' },
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

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };
  return (
    <motion.div 
    className="bg-[#1D1D41] rounded-lg p-2 md:p-6"
    variants={itemVariants}
    initial="hidden"
    animate="visible"
  >
    <div className="flex justify-between items-center mb-6">
      <h2 className="text-xl font-semibold text-white">Recent transactions</h2>
      <button className="text-sm text-gray-400">See All</button>
    </div>

    <table className="w-full">
      <thead>
        <tr className="text-left font-normal text-[#AEABD8] text-sm">
          <th className="pb-4">Name</th>
          <th className="pb-4">Date</th>
          <th className="pb-4">Amount</th>
          <th className="pb-4 pl-2 md:ml-0">Status</th>
        </tr>
      </thead>
      <tbody>
        {transactions.map((transaction, index) => (
          <tr key={index} className="text-white border-b border-b-[#2D2B4D]">
            <td className="py-3">
              <div className="flex items-center md:gap-3">
                <div className="h-8 font-normal w-8 rounded-full bg-[#1B1B3B] flex items-center justify-center">
                 <Image src={emo1} alt='image'/>
                </div>
                {transaction.name}
              </div>
            </td>
            <td className="py-3 pr-2 md:pr-0 text-gray-100 font-normal">{transaction.date}</td>
            <td className="py-3">{transaction.amount}</td>
            <td className="py-3">
              <span className="text-green-500 bg-green-950 p-1 rounded-full">{transaction.status}</span>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </motion.div>
  )
}

export default Transactions