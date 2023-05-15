"use client";
import React from "react";
import front from "../assets/frontend.png";
import back from "../assets/backend.png";
import app from "../assets/app.png";
import Image from "next/image";
import { motion } from "framer-motion";

export default function About() {
  return (
    <div className="text-gray-500 w-full">
      <div className="relative max-w-7xl mx-auto">
        <div className="absolute top-0 -left-4 w-72 h-72 bg-emerald-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute top-0 -right-4 w-72 h-72 bg-gray-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-gray-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
        <h1 className="text-center">About Me</h1>
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
          className="flex flex-col bg-white bg-opacity-20 backdrop-blur-lg rounded drop-shadow-lg p-6"
        >
          <h1 className="text-left">Software Engineer</h1>
          <p className="text-left mb-3 text-xs mt-5">
            I'm a skilled and passionate Full Stack Developer with expertise in
            HTML, CSS, JavaScript, React, Next.js, Node.js, Express, and custom
            WordPress theme development. I excel at creating captivating web
            experiences that blend creativity with technical proficiency.
          </p>
          <p className="text-left mb-3 text-xs">
            With a strong foundation in front-end development using HTML, CSS,
            and JavaScript, I craft seamless user interfaces and responsive
            designs. I leverage React and Next.js to build dynamic and
            interactive web applications, delivering high-performance solutions.
          </p>
          <p className="text-left mb-3 text-xs">
            On the back end, I specialize in Node.js and Express, developing
            efficient server-side applications and RESTful APIs. Additionally, I
            have extensive experience in creating custom WordPress themes that
            align with clients' branding and functionality requirements.
          </p>
          <p className="text-left mb-3 text-xs">
            Collaborative and detail-oriented, I thrive in team environments,
            consistently delivering exceptional results. I prioritize clean code
            practices and SEO optimization, ensuring websites rank well in
            search engines and drive organic traffic.
          </p>
          <p className="text-left text-xs">
            I'm committed to staying up-to-date with the latest industry trends,
            enabling me to deliver cutting-edge solutions that exceed
            expectations. If you're looking for a dedicated Full Stack Developer
            to bring your vision to life, let's connect and create remarkable
            web experiences together.
          </p>
        </motion.div>
        <div className="flex flex-col items-center bg-white bg-opacity-20 backdrop-blur-lg rounded drop-shadow-lg p-8">
          <h1 className="text-sm text-emerald-500">WHAT I DO</h1>
          <h1 className="text-lg">Specializing In</h1>
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
            className="text-sm flex flex-col md:flex-row text-center md:space-x-20 mt-10"
          >
            <div className="flex flex-col space-y-5">
              <div className="bg-gray-200 h-40 w-40 flex justify-center rounded-full items-center">
                <Image
                  src={front}
                  width={1000}
                  height={50}
                  alt="plus"
                  className="block h-24 w-24"
                />
              </div>
              <p>Front-end</p>
            </div>
            <div className="flex flex-col space-y-5 items-center">
              <div className="bg-gray-200 h-40 w-40 flex justify-center rounded-full items-center">
                <Image
                  src={back}
                  width={1000}
                  height={50}
                  alt="plus"
                  className="block h-24 w-24"
                />
              </div>
              <p>Back-end</p>
            </div>
            <div className="flex flex-col space-y-5 items-center">
              <div className="bg-gray-200 h-40 w-40 flex justify-center rounded-full items-center">
                <Image
                  src={app}
                  width={1000}
                  height={50}
                  alt="plus"
                  className="block h-24 w-24"
                />
              </div>
              <p>Mobile Application</p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
