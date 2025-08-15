"use client";
import { useState } from "react";

export default function RangePrice() {
  const min = 10_000;
  const max = 1_000_000;
  const [minValue, setMinValue] = useState(min);
  const [maxValue, setMaxValue] = useState(max);

  const getPercent = (value) => ((value - min) / (max - min)) * 100;

  const handleMinChange = (e) => {
    const value = Math.min(Number(e.target.value), maxValue - 1000);
    setMinValue(value);
  };

  const handleMaxChange = (e) => {
    const value = Math.max(Number(e.target.value), minValue + 1000);
    setMaxValue(value);
  };

  return (
    <div className="w-full ">
      <div className="relative w-full pb-4 pt-3 flex items-center justify-between">
        {/* Track */}
        <div className="absolute w-full h-2 bg-gray-200 rounded-full" />
        {/* Highlighted range */}
        <div
          className="absolute h-2 bg-[#D9D9D9] rounded-full"
          style={{
            left: `${getPercent(minValue)}%`,
            right: `${100 - getPercent(maxValue)}%`,
          }}
        />

        {/* Min thumb */}
        <input
          type="range"
          min={min}
          max={max}
          value={minValue}
          step="1000"
          onChange={handleMinChange}
          className="absolute w-full appearance-none bg-transparent pointer-events-none
            [&::-webkit-slider-thumb]:appearance-none
            [&::-webkit-slider-thumb]:w-3
            [&::-webkit-slider-thumb]:h-3
            [&::-webkit-slider-thumb]:rounded-full
            [&::-webkit-slider-thumb]:bg-black
            [&::-webkit-slider-thumb]:cursor-pointer
            [&::-webkit-slider-thumb]:pointer-events-auto
            [&::-moz-range-thumb]:w-2
            [&::-moz-range-thumb]:h-2
            [&::-moz-range-thumb]:rounded-full
            [&::-moz-range-thumb]:bg-white
            [&::-moz-range-thumb]:cursor-pointer
            [&::-moz-range-thumb]:pointer-events-auto"
        />

        {/* Max thumb */}
        <input
          type="range"
          min={min}
          max={max}
          value={maxValue}
          step="1000"
          onChange={handleMaxChange}
          className="absolute w-full appearance-none bg-transparent pointer-events-none
            [&::-webkit-slider-thumb]:appearance-none
            [&::-webkit-slider-thumb]:w-3
            [&::-webkit-slider-thumb]:h-3
            [&::-webkit-slider-thumb]:rounded-full
            [&::-webkit-slider-thumb]:bg-black
            [&::-webkit-slider-thumb]:cursor-pointer
            [&::-webkit-slider-thumb]:pointer-events-auto
            [&::-moz-range-thumb]:w-2
            [&::-moz-range-thumb]:h-2
            [&::-moz-range-thumb]:rounded-full
            [&::-moz-range-thumb]:bg-white
            [&::-moz-range-thumb]:cursor-pointer
            [&::-moz-range-thumb]:pointer-events-auto"
        />
      </div>
      {/* Value display */}
      <div className="flex justify-between text-gray-700 font-medium">
        <span className="text-xs bg-[#D9D9D9] rounded-full px-3 py-1">${minValue.toLocaleString()}</span>
        <span className="text-xs bg-[#D9D9D9] rounded-full px-3 py-1">${maxValue.toLocaleString()}</span>
      </div>
    </div>
  );
}
