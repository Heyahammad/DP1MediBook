import React from "react";
import { assets } from "../assets/assets";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaFacebook,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-primary2 text-offwhite py-12 border-t border-gray-200">
      <div className="container mx-auto px-6 sm:px-10 grid grid-cols-1 sm:grid-cols-3 gap-10">
        <div className="flex flex-col items-center sm:items-start">
          <img className="mb-5 w-40" src={assets.logowhite} alt="MediBook Logo" />
          <p className="text-offwhite text-center sm:text-left text-sm">
            At MediBook, we make healthcare easier for everyone. Our platform
            helps you find trusted doctors, book appointments quickly, and
            manage your health records all in one place. Whether you need a
            check-up or expert care, MediBook is here to support your health
            journey every step of the way.
          </p>
        </div>

        <div className="text-center sm:text-left">
          <p className="text-xl font-semibold mb-5 text-offwhite">COMPANY</p>
          <ul className="flex flex-col gap-3 text-offwhite">
            <li className="hover:text-primary cursor-pointer transition duration-300">
              Home
            </li>
            <li className="hover:text-primary cursor-pointer transition duration-300">
              About Us
            </li>
            <li className="hover:text-primary cursor-pointer transition duration-300">
              Delivery
            </li>
            <li className="hover:text-primary cursor-pointer transition duration-300">
              Privacy Policy
            </li>
          </ul>
        </div>

        <div className="text-center sm:text-left">
          <p className="text-xl font-semibold mb-5 text-offwhite">
            GET IN TOUCH
          </p>
          <ul className="flex flex-col gap-3 text-offwhite">
            <li className="flex items-center gap-2 hover:text-primary cursor-pointer transition duration-300">
              <FaPhoneAlt /> +880123456789
            </li>
            <li className="flex items-center gap-2 hover:text-primary cursor-pointer transition duration-300">
              <FaEnvelope /> heyahammad@gmail.com
            </li>
          </ul>
          <div className="flex justify-center gap-6 mt-5">
            <a
              href="#"
              className="text-offwhite hover:text-primary transition duration-300"
            >
              <FaFacebook className="text-2xl" />
            </a>
            <a
              href="#"
              className="text-offwhite hover:text-primary transition duration-300"
            >
              <FaTwitter className="text-2xl" />
            </a>
            <a
              href="#"
              className="text-offwhite hover:text-primary transition duration-300"
            >
              <FaInstagram className="text-2xl" />
            </a>
          </div>
        </div>
      </div>

      <div className="mt-12 border-t border-offwhite pt-6">
        <p className="text-center text-sm text-offwhite">
          Copyright 2024 @heyahammad - All Rights Reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
