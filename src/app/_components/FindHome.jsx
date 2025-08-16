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
  const [selectedProperty, setSelectedProperty] = useState(null);
  const [selectedAmenities, setSelectedAmenities] = useState([]);
  
  const toggleDropdown = () => {
    setDropdown(!dropdown);
  };
  
  const handlePropertySelect = (e, propertyType) => {
    e.preventDefault();
    setSelectedProperty(propertyType);
  };
  
  const handleAmenitySelect = (e, amenity) => {
    e.preventDefault();
    setSelectedAmenities(prev => 
      prev.includes(amenity) 
        ? prev.filter(item => item !== amenity)
        : [...prev, amenity]
    );
  };

  return (
    <main className="bg-[#D9D9D9] sm:p-8 sm:py-12 py-12 p-5">
      <h1 className="text-[#272726] text-center sm:text-4xl text-3xl mb-10">
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
          <button 
            onClick={(e) => handlePropertySelect(e, 'house')}
            className="bg-[#D9D9D9] lg:p-9 md:p-7 sm:p-6 py-5 flex flex-col items-center justify-center rounded-[5px] relative hover:shadow-xl"
          >
            <span>
              <House />
            </span>
            <span className="text-[clamp(0.6rem,2vw,1rem)]">House</span>
            {selectedProperty === 'house' && (
              <div className="absolute sm:bottom-5 bottom-2 w-2 h-2 bg-transparent border border-black rounded-full animate-pulse"></div>
            )}
          </button>
          <button 
            onClick={(e) => handlePropertySelect(e, 'condo')}
            className="bg-[#D9D9D9] lg:p-9 md:p-7 sm:p-6 py-5 flex flex-col items-center justify-center rounded-[5px] relative hover:shadow-xl"
          >
            <span>
              <Building />
            </span>
            <span className="text-[clamp(0.6rem,2vw,1rem)]">Condominium</span>
            {selectedProperty === 'condo' && (
              <div className="absolute sm:bottom-5 bottom-2 w-2 h-2 bg-transparent border border-black rounded-full animate-pulse"></div>
            )}
          </button>
          <button 
            onClick={(e) => handlePropertySelect(e, 'townhouse')}
            className="bg-[#D9D9D9] lg:p-9 md:p-7 sm:p-6 py-5 flex flex-col items-center justify-center rounded-[5px] relative hover:shadow-xl"
          >
            <span>
              <Building />
            </span>
            <span className="text-[clamp(0.6rem,2vw,1rem)]">Town House</span>
            {selectedProperty === 'townhouse' && (
              <div className="absolute sm:bottom-5 bottom-2 w-2 h-2 bg-transparent border border-black rounded-full animate-pulse"></div>
            )}
          </button>
          <button 
            onClick={(e) => handlePropertySelect(e, 'lots')}
            className="sm:flex hidden bg-[#D9D9D9] lg:p-9 md:p-7 sm:p-6 py-5 flex-col items-center justify-center rounded-[5px] relative hover:shadow-xl"
          >
            <span>
              <TreePine />
            </span>
            <span className="text-[clamp(0.6rem,2vw,1.2rem)]">Lots/Lands</span>
            {selectedProperty === 'lots' && (
              <div className="absolute sm:bottom-5 bottom-2 w-2 h-2 bg-transparent border border-black rounded-full animate-pulse"></div>
            )}
          </button>
          <button 
            onClick={(e) => handlePropertySelect(e, 'mobile')}
            className="sm:flex hidden bg-[#D9D9D9] lg:p-9 md:p-7 sm:p-6 py-5 flex-col items-center justify-center rounded-[5px] relative hover:shadow-xl"
          >
            <span>
              <Warehouse />
            </span>
            <span className="text-[clamp(0.6rem,2vw,1rem)]">Mobile Home</span>
            {selectedProperty === 'mobile' && (
              <div className="absolute sm:bottom-5 bottom-2 w-2 h-2 bg-transparent border border-black rounded-full animate-pulse"></div>
            )}
          </button>
          {/* Hidden */}
          <div className="flex justify-center items-center gap-2 sm:hidden col-span-3 w-full">
            <button 
              onClick={(e) => handlePropertySelect(e, 'lots')}
              className="bg-[#D9D9D9] lg:p-9 md:p-7 sm:p-6 py-5 flex flex-col items-center justify-center grow-1 text-[clamp(0.6rem,2vw,1rem)] relative hover:shadow-xl rounded-[5px]"
            >
              <span>
                <TreePine />
              </span>
              Lots/Lands
              {selectedProperty === 'lots' && (
                <div className="absolute sm:bottom-5 bottom-2 w-2 h-2 bg-transparent border border-black rounded-full animate-pulse"></div>
              )}
            </button>
            <button 
              onClick={(e) => handlePropertySelect(e, 'mobile')}
              className="bg-[#D9D9D9] lg:p-9 md:p-7 sm:p-6 py-5 flex flex-col items-center justify-center grow-1 text-[clamp(0.6rem,2vw,1rem)] relative hover:shadow-xl rounded-[5px]"
            >
              <span>
                <Warehouse />
              </span>
              Mobile Home
              {selectedProperty === 'mobile' && (
                <div className="absolute sm:bottom-5 bottom-2 w-2 h-2 bg-transparent border border-black rounded-full animate-pulse"></div>
              )}
            </button>
          </div>
        </div>
        <label className="flex gap-2 items-center">
          <BadgeDollarSign />
          Price Range
        </label>
        <RangePrice />
        <div className="max-w-5xl sm:-mx-6 -mx-3 py-0.5 text-xs bg-[#D9D9D9] shine-contact">
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
               <input type="number" placeholder="Square Meters" className="bg-[#D9D9D9] w-full px-2 py-1 rounded-[5px] focus:outline-none appearance-none"/>
              </div>
            </div>
          </div>
          <label className="flex gap-2 items-center mb-2">
            <Sparkles />
            Amenities & Features
          </label>
          <div className="grid sm:grid-cols-5 grid-cols-3 gap-3 py-2">
            <button 
              onClick={(e) => handleAmenitySelect(e, 'balcony')}
              className={`py-1 w-full rounded-full text-[clamp(0.6rem,2vw,1rem)] transition-colors duration-200 hover:shadow-md ${
                selectedAmenities.includes('balcony') ? 'bg-[#272726] text-white' : 'bg-[#D9D9D9]'
              }`}
            >
              Balcony
            </button>
            <button 
              onClick={(e) => handleAmenitySelect(e, 'fireplace')}
              className={`py-1 w-full rounded-full text-[clamp(0.6rem,2vw,1rem)] transition-colors duration-200 hover:shadow-md ${
                selectedAmenities.includes('fireplace') ? 'bg-[#272726] text-white' : 'bg-[#D9D9D9]'
              }`}
            >
              Fire Place
            </button>
            <button 
              onClick={(e) => handleAmenitySelect(e, 'garden')}
              className={`py-1 w-full rounded-full text-[clamp(0.6rem,2vw,1rem)] transition-colors duration-200 hover:shadow-md ${
                selectedAmenities.includes('garden') ? 'bg-[#272726] text-white' : 'bg-[#D9D9D9]'
              }`}
            >
              Garden
            </button>
            <button 
              onClick={(e) => handleAmenitySelect(e, 'garage')}
              className={`py-1 w-full rounded-full text-[clamp(0.6rem,2vw,1rem)] transition-colors duration-200 hover:shadow-md ${
                selectedAmenities.includes('garage') ? 'bg-[#272726] text-white' : 'bg-[#D9D9D9]'
              }`}
            >
              Garage
            </button>
            <button 
              onClick={(e) => handleAmenitySelect(e, 'pool')}
              className={`py-1 w-full rounded-full text-[clamp(0.6rem,2vw,1rem)] transition-colors duration-200 hover:shadow-md ${
                selectedAmenities.includes('pool') ? 'bg-[#272726] text-white' : 'bg-[#D9D9D9]'
              }`}
            >
              Pool
            </button>
            <button 
              onClick={(e) => handleAmenitySelect(e, 'parking')}
              className={`py-1 w-full rounded-full text-[clamp(0.6rem,2vw,1rem)] transition-colors duration-200 hover:shadow-md ${
                selectedAmenities.includes('parking') ? 'bg-[#272726] text-white' : 'bg-[#D9D9D9]'
              }`}
            >
              Parking space
            </button>
          </div>
        </div>
        <button className="px-4 py-1 flex bg-[#D9D9D9] w-fit rounded-[5px] self-end gap-2 shine-button hover:shadow-md">
          <Search />
          Find Properties
        </button>
      </form>
    </main>
  );
}
