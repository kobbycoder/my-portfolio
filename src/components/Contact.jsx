"use client";
import React, { useState } from "react";
import Image from "next/image";
import mail from "../assets/mail.png";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [clicked, setClicked] = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();
    setClicked(true)
    if (name === "" || email === "" || message === "") {
      console.log("Empty");
      setClicked(false)
    } else {
      try {
        const res = await fetch("/api/contact", {
          method: 'POST',
          body: JSON.stringify({
            name,
            email,
            message,
          }),
          headers: {
            "content-type": "application/json",
          },
        });

        if (res.status === 200) {
          setName('')
          setEmail('')
          setMessage('')
        }
      } catch (error) {
        console.error("Error: ", error);
      }
      setClicked(false)
    }
  };

  return (
    <div className="text-gray-500 w-full bg-circuit bg-right">
      <div className="max-w-7xl mx-auto h-full">
        <div className="flex flex-col h-full bg-white bg-opacity-20 backdrop-blur-lg rounded drop-shadow-lg p-6">
          <div className="flex flex-col md:flex-row justify-center w-full h-full">
            <div className="md:w-1/3 w-full flex flex-col items-center justify-center space-y-8">
              <h1 className="font-bold text-3xl">Let's Talk!</h1>
              <Image
                src={mail}
                width={1000}
                height={50}
                alt="plus"
                className="block h-48 w-48"
                priority={true}
              />
            </div>
            <div className="md:w-2/3 w-full flex flex-col items-center justify-center">
              <h1 className="font-bold text-lg">Contact Info</h1>
              <form className="w-full" onSubmit={onSubmit}>
                <div className="my-3 mx-auto">
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full mt-2 p-4 outline-none border bg-transparent rounded-lg"
                    placeholder="Enter your name"
                  />
                </div>
                <div className="my-3 mx-auto">
                  <input
                    type="text"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                    className="w-full mt-2 p-4 outline-none border bg-transparent rounded-lg"
                    placeholder="Enter your email"
                  />
                </div>
                <div className="my-3 mx-auto">
                  <textarea
                    type="text"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full h-36  mt-2 p-4 outline-none border bg-transparent rounded-lg"
                    placeholder="Type Message...."
                  ></textarea>
                </div>
                <button
                  className={` ${clicked ? 'loading': ''} bg-emerald-500 btn border-none hover:bg-gray-500 w-full duration-300 text-white shadow p-2 rounded-lg font-bold`}
                  type="submit"
                >
                  Let's talk!
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
