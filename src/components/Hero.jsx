"use client";
import React from "react";
import twitter from "../assets/twitter.png";
import linkedIn from "../assets/linkedin.png";
import email from "../assets/email.png";
import design from "../assets/design.png";
import github from "../assets/github.png";
import Image from "next/image";
import { motion } from "framer-motion";
import { Cursor, useTypewriter } from "react-simple-typewriter";

export default function Hero() {
  const [text, count] = useTypewriter({
    words: [
      "Software Engineer.",
      "Beautiful UIs.",
      "Responsive Design.",
      "Scalable Applications.",
    ],
    loop: true,
    delaySpeed: 2000,
  });

  return (
    <div className="w-full">
      <div className="w-full flex flex-col items-center justify-center md:flex-row h-full">
        <div className="relative w-full max-w-lg">
          <div className="absolute top-0 -left-4 w-72 h-72 bg-emerald-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
          <div className="absolute top-0 -right-4 w-72 h-72 bg-gray-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-gray-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
          <div className="w-full text-center z-10 flex flex-col justify-center items-center bg-white">
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.3,
                ease: [0, 0.71, 0.2, 1.01],
                scale: {
                  type: "spring",
                  damping: 5,
                  stiffness: 100,
                  restDelta: 0.001,
                },
              }}
              className="relative"
            >
              <div className="space-y-3 text-gray-500 mt-20 md:mt-0">
                <h1 className=" text-2xl">Hi,</h1>
                <h1 className="text-5xl">my name is </h1>
                <h1 className=" text-5xl font-bold text-emerald-800">
                  Alexander
                </h1>
              </div>
              <div className=" space-y-20 mt-5">
                <h1 className="text-gray-500">
                  <span>{text}</span>
                  <Cursor cursorColor="#10b981" />
                </h1>
                <div className="space-x-4 font-bold">
                  <a href="/contact" className="bg-emerald-500 p-4 rounded-lg">
                    Let's talk
                  </a>
                  <a
                    href="cv-q.pdf"
                    target="_blank"
                    className="text-gray-500 border-gray-500 border p-4 rounded-lg"
                  >
                    Download CV
                  </a>
                </div>
                <div className="flex space-x-4 justify-center">
                  <a
                    href="https://www.linkedin.com/in/alexander-acquah-osman-71397b174/"
                    target="_blank"
                  >
                    <Image
                      src={linkedIn}
                      width={1000}
                      height={50}
                      alt="plus"
                      className="block h-5 w-auto"
                    />
                  </a>
                  <a href="https://twitter.com/AlexanderOsman6" target="_blank">
                    <Image
                      src={twitter}
                      width={1000}
                      height={50}
                      alt="plus"
                      className="block h-5 w-auto"
                    />
                  </a>
                  <a href="https://github.com/kobbycoder" target="_blank">
                    <Image
                      src={github}
                      width={1000}
                      height={50}
                      alt="plus"
                      className="block h-5 w-auto"
                    />
                  </a>
                  <a href="mailto:developer@kobbycoder.com" target="_blank">
                    <Image
                      src={email}
                      width={1000}
                      height={50}
                      alt="plus"
                      className="block h-5 w-auto"
                    />
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
