"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import preview from "@/public/assets/preview.png";
import logo from "@/public/assets/logo.png";
const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [activeSlide, setActiveSlide] = useState(0);
  const [errorMessage, setErrorMessage] = useState(""); // Error message state

  const router = useRouter(); // Initialize router
  const handleSubmit = () => {
    // Checking if fields are empty
    if (!email.trim() || !password.trim()) {
      setErrorMessage("Email and Password are required!");
      return;
    }

    // Clear error if valid input
    setErrorMessage("");

    // Navigating to /home-dasboard after successful login
    router.push("/dashboard/home");
  };
  const testimonials = [
    {
      quote:
        "I've been using Uifry for over a year, and it's helped simplify all my payments.",
      name: "Ali Riaz",
      location: "Singapore",
    },
    {
      quote: "Uifry made tracking my finances so much easier!",
      name: "Sarah Chen",
      location: "Hong Kong",
    },
    {
      quote: "The best payment platform I've ever used.",
      name: "Mike Johnson",
      location: "London",
    },
    {
      quote: "Highly recommend for anyone managing online payments.",
      name: "Priya Sharma",
      location: "Mumbai",
    },
  ];

  return (
    <div className="flex h-screen w-full bg-[#1D1D41] text-white">
      {/* Left Panel - Login Form */}
      <div className="w-full md:w-1/2 flex flex-col items-center justify-center px-8">
        <div className="w-full max-w-md">
          {/* Logo */}
          <div className="flex justify-center mb-8">
            <div className="text-gray-50 text-3xl font-bold flex items-center">
              <Image src={logo} alt="" /> uifry
            </div>
          </div>

          <div className="text-center mb-6">
            <h1 className="text-2xl font-semibold mb-1">
              Welcome back, Ali Riaz{" "}
              <span role="img" aria-label="party">
                🙇🏾‍♀️
              </span>
            </h1>
            <p className="text-[#DCD9D9] font-normal text-[16px] leading-[24px]">
              Login to access your Uifry account
            </p>
          </div>

          {/* Login Form */}
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div>
              <label htmlFor="email" className="block text-sm mb-2">
                Email Address
              </label>
              <input
                placeholder="E.g Aliriaz@Uifry.com"
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-3 rounded placeholder:text-[#DCD9D9] placeholder:font-normal placeholder:text-[14px] bg-transparent border border-gray-700 focus:border-indigo-500 focus:outline-none transition"
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm mb-2">
                Password
              </label>
              <div className="relative">
                <input
                  placeholder="••••••••••••"
                  id="password"
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full p-3 rounded bg-transparent border border-gray-700 placeholder:text-[#DCD9D9] placeholder:font-normal placeholder:text-[14px] focus:border-indigo-500 focus:outline-none transition"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#CBC8FF] cursor-pointer hover:text-white transition"
                >
                  {showPassword ? "Show" : "Hide"}
                </button>
              </div>
            </div>
            {/* Error Message */}
            {errorMessage && (
              <p className="text-red-500 text-sm font-semibold">
                {errorMessage}
              </p>
            )}
            <div className="text-right">
              <button
                type="button"
                className="text-sm cursor-pointer text-[#CBC8FF] hover:text-indigo-300 transition"
              >
                I Forgot My Password!
              </button>
            </div>

            <motion.button
              onClick={handleSubmit}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="w-full p-3 font-bold text-[16px] leading-[24px] rounded bg-[#CBC8FF] cursor-pointer text-[#1D1D41] hover:bg-indigo-300 transition"
            >
              Login
            </motion.button>

            <div className="text-center mt-6">
              <p className="text-gray-50">
                Not Ali Riaz?{" "}
                <a
                  href="#"
                  className="text-[#CBC8FF] font-bold text-[16px] leading-[24px] hover:text-[#CBC8FF] underline transition"
                >
                  Login To Continue
                </a>
              </p>
            </div>
          </form>
        </div>
      </div>

      {/* Right Panel - Testimonials & Preview */}
      <div className="hidden md:block md:w-1/2 bg-[#141332] relative overflow-hidden">
        {/* Stars */}
        <div className="absolute top-16 left-12 flex">
          {[...Array(5)].map((_, index) => (
            <svg
              key={index}
              className="w-6 h-6 text-yellow-400 mr-1"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
        </div>

        {/* Testimonials */}
        <div className="absolute top-32 left-12 right-12">
          <motion.div
            key={activeSlide}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <blockquote className="text-3xl -mt-5 font-semibold mb-6">
              "{testimonials[activeSlide].quote}"
            </blockquote>
            <div className="-mt-2">
              <p className="text-[#CBC8FF] font-bold text-[20px] leading-[28px] ">
                {testimonials[activeSlide].name}
              </p>
              <p className="text-[#CBC8FF] font-medium text-[16px] ">
                {testimonials[activeSlide].location}
              </p>
            </div>
          </motion.div>

          {/* Dots */}
          <div className="flex mt-8 items-center justify-center cursor-pointer ">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveSlide(index)}
                className={`w-2 h-2 mx-1 rounded-full ${
                  activeSlide === index
                    ? "bg-white w-4 h-2 mx-1 rounded-full"
                    : "bg-gray-600"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Dashboard Preview */}
        <div className="absolute bottom-0 right-2">
          <Image
            src={preview}
            alt="Dashboard Preview"
            className="w-full  2xl:w-[500px] pt-12"
            priority
          />
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
