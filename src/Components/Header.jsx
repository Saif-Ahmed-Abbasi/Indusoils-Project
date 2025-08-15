"use client";
import { ArrowRight } from "lucide-react";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Blurred Overlay when menu is open */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-md z-40"
          onClick={() => setIsOpen(false)}
        ></div>
      )}

      <nav className="bg-white text-black shadow-md relative z-50">
        <div className="max-w-7xl mx-auto px-6 py-2 flex justify-between items-center">
          {/* Logo */}
          <div className="text-2xl font-bold">
            <span className="text-red-600">■</span> INDUS
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <Link to="/" className="font-bold hover:text-gray-500 transition">
              Home
            </Link>
            <Link to="/about" className="font-bold hover:text-gray-500 transition">
              About
            </Link>
            <Link to="/product" className="font-bold hover:text-gray-500 transition">
              Products
            </Link>
             <Link to="/products2" className="font-bold hover:text-gray-500 transition">
              Products2
            </Link>
          </div>

          {/* Contact Us Button */}
          <div className="hidden md:flex items-center">
            <Link
              to="/contact"
              className="font-bold py-2 px-6 rounded-full w-auto flex hover:bg-black hover:text-white transition duration-300"
            >
              <span>Contact Us</span>
              <ArrowRight className="ml-2" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setIsOpen(true)}>
            <Menu size={28} />
          </button>
        </div>
      </nav>

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 right-0 w-64 h-full bg-gray-100 text-black p-6 transition-transform duration-300 z-50 ${isOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <button className="absolute top-4 right-4" onClick={() => setIsOpen(false)}>
          <X size={28} />
        </button>

        <div className="flex flex-col space-y-4 mt-8">
          <Link to="/" className="font-bold hover:text-gray-500 transition">
            Home
          </Link>
          <Link to="/about" className="font-bold hover:text-gray-500 transition">
            About
          </Link>
          <Link to="/product" className="font-bold hover:text-gray-500 transition">
            Products
          </Link>

          <Link to="/contact" className="font-bold gap-0 hover:gap-5 w-auto transition flex items-center">
            <span>Contact</span>
            <ArrowRight className="ml-2" />
          </Link>
        </div>
      </div>
    </>
  );
};

export default Header;
