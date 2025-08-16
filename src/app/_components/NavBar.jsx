"use client";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white p-4 text-[#272726] sticky top-0 z-50 shadow-md">
      <div className="flex items-center justify-between sm:px-8 px-2">
        <span><Image src="/Marci.svg" alt="Marci Metzger Logo" width={160} height={40} className="w-40" priority /></span>
        <ul className="sm:flex hidden space-x-4">
          <li><a href="#home" className="hover:text-[#707070]">Home</a></li>
          <li><a href="#about" className="hover:text-[#707070]">About Us</a></li>
          <li><a href="#contact" className="hover:text-[#707070]">Contact Us</a></li>
        </ul>
        <button 
          className="sm:hidden block" 
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {isOpen && (
        <ul className="sm:hidden flex flex-col space-y-2 mt-4 px-2 absolute bg-white w-full right-0 py-4 ease-in-out">
          <li><a href="#home" className="hover:text-[#707070] block py-2" onClick={() => setIsOpen(false)}>Home</a></li>
          <li><a href="#about" className="hover:text-[#707070] block py-2" onClick={() => setIsOpen(false)}>About Us</a></li>
          <li><a href="#contact" className="hover:text-[#707070] block py-2" onClick={() => setIsOpen(false)}>Contact Us</a></li>
        </ul>
      )}
    </nav>
  );
}
