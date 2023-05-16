import React from "react";
import Image from "next/image";
import twitter from "../assets/twitter.png";
import linkedIn from "../assets/linkedin.png";
import logo from "../assets/logo-round.png";
import footerImage from "../assets/footer-image.png";
import phone from "../assets/phone.png"
import { PhoneIcon, EnvelopeIcon, MapPinIcon } from "@heroicons/react/24/solid";

export default function Footer() {
  return (
    <footer className="bg-white p-4 w-full flex flex-wrap md:flex-nowrap justify-center">
      <div className="w-full md:w-1/3 flex justify-center p-5">
        <Image
          src={footerImage}
          width={1000}
          height={50}
          alt="plus"
          className="block h-32 w-32"
          priority={true}
        />
      </div>
      <hr className="md:w-1 md:h-24 h-1 w-48 mx-auto my-4 bg-gray-500 border-0 rounded md:my-10" />
      <div className="w-full md:w-1/3 flex flex-col items-center p-5 text-gray-500">
        <div className="flex flex-col justify-start">
          <h1 className="font-bold">Alexander Acquah Osman</h1>
          <h1 className="text-xs">Software Engineer</h1>
          <hr className="h-1 w-12 bg-emerald-500 border-0 rounded my-3" />
        </div>

        <div className="flex flex-col mt-2 text-xs space-y-3">
          <div className="flex items-center space-x-4">
            <PhoneIcon className="h-4 w-4" />
            <p>+233 59 828 2291</p>
          </div>

          <div className="flex items-center space-x-4">
            <Image
              src={phone}
              width={1000}
              height={50}
              alt="plus"
              className="block h-4 w-4"
              priority={true}
            />
            <p>+233 59 335 2839</p>
          </div>

          <div className="flex items-center space-x-4">
            <EnvelopeIcon className="h-4 w-4" />
            <p>developer@kobbycoder.com</p>
          </div>

          <div className="flex items-center space-x-4">
            <MapPinIcon className="h-4 w-4" />
            <p>Kumasi, Ghana</p>
          </div>
        </div>
      </div>
      <hr className="md:w-1 md:h-24 h-1 w-48 mx-auto my-4 bg-gray-500 border-0 rounded md:my-10" />
      <div className="w-full md:w-1/3 flex flex-col items-center justify-center p-5 space-y-4">
        <Image
          src={logo}
          width={1000}
          height={50}
          alt="plus"
          className="block h-12 w-12"
          priority={true}
        />

        <div className="flex space-x-4">
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
              priority={true}
            />
          </a>
          <a href="https://twitter.com/AlexanderOsman6" target="_blank">
            <Image
              src={twitter}
              width={1000}
              height={50}
              alt="plus"
              className="block h-5 w-auto"
              priority={true}
            />
          </a>
        </div>
      </div>
    </footer>
  );
}
