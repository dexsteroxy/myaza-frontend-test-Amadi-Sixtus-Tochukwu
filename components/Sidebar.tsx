
"use client"
import React from 'react'
import icon from '@/public/icons/icon.png'
import { usePathname } from 'next/navigation';
import { CreditCard, Search, ChevronDown } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import avatar from '@/public/assets/name.png';

const Sidebar = () => {

  const pathname = usePathname();

  const linkClasses = (path: string) =>
    pathname === path
      ? 'bg-[#CBC8FF] cursor-pointer rounded-lg text-black font-meduim p-1 flex items-center gap-3'
      : '-ml-1 flex hover:bg-[#141332] rounded-lg p-1 items-center gap-3';

      const formm = (path: string) =>
        pathname === path
          ? 'text-black'
          : 'text-white';
  return (
    <div className="w-64 bg-[#1D1D41] text-white p-6 flex flex-col">
    <div className="mb-12 flex items-center gap-2">
      <Image src={icon} alt="Uifry Logo" className="" />
      <h1 className=' font-extrabold text-white text-4xl'>uifry</h1>
    </div>

    <div className="space-y-6 flex-1">
      <Link href={"/dashboard/home"} className={linkClasses('/dashboard/home')}>
        <div className="p-1">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={formm("/dashboard/home")}>
            <rect x="3" y="3" width="7" height="7" />
            <rect x="14" y="3" width="7" height="7" />
            <rect x="14" y="14" width="7" height="7" />
            <rect x="3" y="14" width="7" height="7" />
          </svg>
        </div>
        <span className="font-medium">Dashboard</span>
      </Link>

      <div className=" flex  items-center gap-3 cursor-not-allowed">
        <div className="p-1">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
            <polyline points="9 22 9 12 15 12 15 22" />
          </svg>
        </div>
        <span>Analytics</span>
      </div>

      <Link href={'/dashboard/wallet'} className={linkClasses('/dashboard/wallet')}>
        <div className="p-1">
          <CreditCard className={formm('/dashboard/wallet')} />
        </div>
        <span>My Wallet</span>
      </Link>

      <div className="cursor-not-allowed flex items-center gap-3">
        <div className="p-1">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
            <circle cx="12" cy="7" r="4" />
          </svg>
        </div>
        <span>Accounts</span>
      </div>

      <div className="cursor-not-allowed flex items-center gap-3">
        <div className="p-1">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
            <circle cx="12" cy="12" r="3" />
            <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
          </svg>
        </div>
        <span>Settings</span>
      </div>
      <span className="block mt-12 w-full h-[2px] bg-[#4B4B99]"></span>


<div className=' mt-16 space-y-5'>

      <div className="cursor-not-allowed flex items-center gap-3">
        <div className="p-1">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
            <circle cx="12" cy="12" r="10" />
            <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
            <line x1="12" y1="17" x2="12.01" y2="17" />
          </svg>
        </div>
        <span>Help center</span>
      </div>


      <div className="cursor-not-allowed flex items-center gap-3">
        <div className="p-1">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
          </svg>
        </div>
        <span>Dark theme</span>
      </div>
</div>
    </div>

    <div className="mt-auto space-y-6">
      

     

      <div className="flex items-center gap-3 mt-6">
      <Image src={avatar} alt='avater'/>
        <div>
          <div className="font-medium">Ali Riaz</div>
          <div className="text-sm text-gray-400">Web Developer</div>
        </div>
        <ChevronDown size={16} className="ml-auto font-extrabold" />
      </div>
    </div>
  </div>
  )
}

export default Sidebar;