"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import getDoument from "@/firebase/getData";
import { motion } from "framer-motion";

export default function Portfolio() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      const projects = await getDoument("Projects").then((res) => {
        setProjects(res.result);
      });
    };

    fetchProjects();
  }, []);

  return (
    <div className="text-gray-500 w-full">
      <div className="relative max-w-7xl mx-auto h-full pb-5">
        <div className="absolute top-0 left-8 w-32 h-32 bg-emerald-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute top-0 right-8 w-32 h-32 bg-gray-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-4 -left-20 w-32 h-32 bg-gray-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
        <h1 className="font-bold text-center">My Latest Projects</h1>
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
          className="flex flex-col h-full bg-white bg-opacity-20 backdrop-blur-lg rounded drop-shadow-lg p-6"
        >
          {projects ? (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
              {projects.map((data, index) => {
                return (
                  <a key={index} href={`${data.link}`} target="_blank">
                    <div className="rounded-2xl border border-emerald-500 p-5">
                      <Image
                        src={data.image}
                        width={1000}
                        height={50}
                        alt="plus"
                        className="block h-auto w-auto rounded-2xl"
                        priority={true}
                      />
                      <p className="text-gray-500 text-xs font-bold mt-5">
                        {data.category}
                      </p>
                      <p className="text-gray-400 font-bold mt-3">
                        {data.title}
                      </p>
                      <p className="text-gray-400 text-xs mt-2">
                        {data.description}
                      </p>
                      <div className="flex space-x-5 mt-5">
                        <Image
                          src={data.framework}
                          width={1000}
                          height={50}
                          alt="plus"
                          className="block h-8 w-8 rounded-2xl"
                          priority={true}
                        />
                        <Image
                          src={data.backend}
                          width={1000}
                          height={50}
                          alt="plus"
                          className="block h-8 w-8 rounded-2xl"
                          priority={true}
                        />
                      </div>
                    </div>
                  </a>
                );
              })}
            </div>
          ) : (
            <div className="flex justify-center text-emerald-500">Hello</div>
          )}
        </motion.div>
      </div>
    </div>
  );
}
