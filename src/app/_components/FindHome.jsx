"use client";
import {
  House,
  Building,
  MapPin,
  Search,
  TreePine,
  Warehouse,
  BadgeDollarSign,
  ChevronDown,
  Sparkles,
  ChevronUp,
} from "lucide-react";
import RangePrice from "./RangePrice";
import { useState } from "react";

export default function FindHome() {
  const [dropdown, setDropdown] = useState(false);
  const toggleDropdown = () => {
    setDropdown(!dropdown);
  };
  return (
    <main className="bg-[#D9D9D9] sm:p-8 sm:py-12 py-12 p-5">
      <h1 className="text-[#272726] text-center sm:text-3xl text-2xl mb-10">
        Begin Your Journey Home
      </h1>
      <form className="max-w-5xl m-auto flex flex-col justify-center space-y-2 bg-[#f3f3f3] sm:p-6 p-3 rounded-[10px] shadow-lg text-[#272726]">
        <label className="flex gap-2 items-center">
          <MapPin />
          Where do you want to live?
        </label>
        <div className="bg-[#D9D9D9] rounded-[5px] flex items-center px-2 py-1">
          <Search />
          <input type="text" className="focus:outline-none px-3 py-1 w-full" placeholder="Search neighborhoods, streets, or areas..."/>
        </div>
        <label className="flex gap-2 items-center">
          <House />
          What type of property?
        </label>
        {/* Properties */}
        <div className="rounded-[5px] grid sm:grid-cols-5 grid-cols-3  gap-2 text-center">
          <button className="bg-[#D9D9D9] lg:p-9 md:p-7 sm:p-6 py-5 flex flex-col items-center justify-center rounded-[5px]">
            <span>
              <House />
            </span>
            <span className="text-[clamp(0.6rem,2vw,1rem)]">House</span>
          </button>
          <button className="bg-[#D9D9D9] lg:p-9 md:p-7 sm:p-6 py-5 flex flex-col items-center justify-center rounded-[5px]">
            <span>
              <Building />
            </span>
            <span className="text-[clamp(0.6rem,2vw,1rem)]">Condominium</span>
          </button>
          <button className="bg-[#D9D9D9] lg:p-9 md:p-7 sm:p-6 py-5 flex flex-col items-center justify-center rounded-[5px]">
            <span>
              <Building />
            </span>
            <span className="text-[clamp(0.6rem,2vw,1rem)]">Town House</span>
          </button>
          <button className="sm:flex hidden bg-[#D9D9D9] lg:p-9 md:p-7 sm:p-6 py-5 flex-col items-center justify-center rounded-[5px]">
            <span>
              <TreePine />
            </span>
            <span className="text-[clamp(0.6rem,2vw,1.2rem)]">Lots/Lands</span>
          </button>
          <button className="sm:flex hidden bg-[#D9D9D9] lg:p-9 md:p-7 sm:p-6 py-5 flex-col items-center justify-center rounded-[5px]">
            <span>
              <Warehouse />
            </span>
            <span className="text-[clamp(0.6rem,2vw,1rem)]">Mobile Home</span>
          </button>
          {/* Hidden for small screens */}
          {/* <div className="xs:hidden sm:hidden flex justify-center items-center gap-2 w-full col-span-2">
            <button className="flex bg-[#D9D9D9] lg:p-9 md:p-7 sm:p-6 py-5 flex-col items-center justify-center grow">
              <span>
                <Warehouse />
              </span>
              <span className="text-[clamp(0.6rem,2vw,1rem)]">
                Mobile Home
              </span>
            </button>
          </div> */}
          {/* Hidden */}
          <div className="flex justify-center items-center gap-2 sm:hidden col-span-3 w-full">
            <button className="bg-[#D9D9D9] lg:p-9 md:p-7 sm:p-6 py-5 flex flex-col items-center justify-center grow-1 text-[clamp(0.6rem,2vw,1rem)]">
              <span>
                <TreePine />
              </span>
              Lots/Lands
            </button>
            <button className="bg-[#D9D9D9] lg:p-9 md:p-7 sm:p-6 py-5 flex flex-col items-center justify-center grow-1 text-[clamp(0.6rem,2vw,1rem)]">
              <span>
                <Warehouse />
              </span>
              Mobile Home
            </button>
          </div>
        </div>
        <label className="flex gap-2 items-center">
          <BadgeDollarSign />
          Price Range
        </label>
        <RangePrice />
        <div className="max-w-5xl -mx-6 py-0.5 text-xs bg-[#D9D9D9]">
          {dropdown ? (
            <button
              onClick={(e) => {
                e.preventDefault();
                toggleDropdown();
              }}
              className="flex items-center w-full justify-center"
            >
              Advance Options <ChevronUp size={16} />
            </button>
          ) : (
            <button
              onClick={(e) => {
                e.preventDefault();
                toggleDropdown();
              }}
              className="flex items-center w-full justify-center"
            >
              Advance Options <ChevronDown size={16} />
            </button>
          )}
        </div>
        <div
          className={`overflow-hidden transition-all duration-300 ${
            dropdown ? "max-h-lvh opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          {/* Advance option drop down */}
          <div className="sm:grid-cols-3 grid-cols-1 gap-3 justify-items-center grid mb-2">
            <div className="flex flex-col items-center w-full">
              <label className="">Bedrooms</label>
              <div className="flex w-full relative items-center">
                <select
                  name="Bedrooms"
                  id="bed"
                  className="bg-[#D9D9D9] w-full px-2 py-1 rounded-[5px] focus:outline-none appearance-none "
                >
                  <option value={null} hidden>
                    Any
                  </option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                </select>
                <ChevronDown
                  size={16}
                  className="text-blue-400 absolute right-0 me-2"
                />
              </div>
            </div>
            <div className="flex flex-col items-center w-full">
              <label className="">Bathrooms</label>
              <div className="flex w-full relative items-center">
                <select
                  name="Bathrooms"
                  id="bed"
                  className="bg-[#D9D9D9] w-full px-2 py-1 rounded-[5px] focus:outline-none appearance-none"
                >
                  <option value={null} hidden>
                    Any
                  </option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                </select>
                <ChevronDown
                  size={16}
                  className="text-blue-400 absolute right-0 me-2"
                />
              </div>
            </div>
            <div className="flex flex-col items-center w-full">
              <label className="">Square Feet</label>
              <div className="flex w-full relative items-center">
                <select
                  name="SquareFeet"
                  id="bed"
                  className="bg-[#D9D9D9] w-full px-2 py-1 rounded-[5px] focus:outline-none appearance-none"
                >
                  <option value={null} hidden>
                    Any
                  </option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                </select>
                <ChevronDown
                  size={16}
                  className="text-blue-400 absolute right-0 me-2"
                />
              </div>
            </div>
          </div>
          <label className="flex gap-2 items-center mb-2">
            <Sparkles />
            Amenities & Features
          </label>
          <div className="grid sm:grid-cols-5 grid-cols-3 gap-3">
            <button className="py-1 w-full rounded-full bg-[#D9D9D9] text-[clamp(0.6rem,2vw,1rem)]">
              Balcony
            </button>
            <button className="py-1 w-full rounded-full bg-[#D9D9D9] text-[clamp(0.6rem,2vw,1rem)]">
              Fire PLace
            </button>
            <button className="py-1 w-full rounded-full bg-[#D9D9D9] text-[clamp(0.6rem,2vw,1rem)]">
              Garden
            </button>
            <button className="py-1 w-full rounded-full bg-[#D9D9D9] text-[clamp(0.6rem,2vw,1rem)]">
              Garage
            </button>
            <button className="py-1 w-full rounded-full bg-[#D9D9D9] text-[clamp(0.6rem,2vw,1rem)]">
              Pool
            </button>
            <button className="py-1 w-full rounded-full bg-[#D9D9D9] text-[clamp(0.6rem,2vw,1rem)]">
              Parking space
            </button>
          </div>
        </div>
        <button className="px-4 py-1 flex bg-[#D9D9D9] w-fit rounded-[5px] self-end gap-2">
          <Search />
          Find Properties
        </button>
      </form>
    </main>
  );
}
