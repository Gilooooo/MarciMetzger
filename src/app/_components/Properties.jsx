import { Bath, Bed, MapPin, Square } from "lucide-react";
import Image from "next/image";

export default function Properties() {
  return (
    <main className="bg-[#D9D9D9] sm:p-8 sm:py-12 py-12 p-5">
      <h1 className="sm:text-4xl text-3xl text-[#272726] text-center pt-4">
        Handpicked Properties
      </h1>
      <p className="text-md text-[#272726] mb-4 text-center pb-4">
        Discover exceptional homes in Pahrump's most desirable neighborhoods.
        Each property is personally selected for its value and potential.
      </p>
      <section className="grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-4 max-w-7xl m-auto">
        <div className="rounded-[5px] bg-white text-[#272726] shadow-2xl flex flex-col ">
          <div className="relative">
            <Image
              src="/Gilo.png"
              alt="Desert View Drive property"
              width={400}
              height={192}
              className="w-full h-48 object-cover rounded-[5px]"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            />
            <p className="absolute bottom-3 right-3 px-3 py-1 rounded-full bg-[#D9D9D9]">
              $830,000
            </p>
          </div>
          <div className="p-4 flex flex-col flex-1 justify-between">
            <h4 className="text-2xl">1234 Desert View Drive</h4>
            <p className="flex gap-1 items-center mb-2.5">
              <MapPin size={18} />
              <span className="text-lg">Pahrump, NV 89048</span>
            </p>
            <p className="text-xs flex gap-2">
              <span className="flex items-center gap-1">
                <Bed size={16} />
                <span className="text-md mt-0.5">3</span>
              </span>
              <span className="flex items-center gap-1">
                <Bath size={16} />
                <span className="text-md mt-0.5">2</span>
              </span>
              <span className="flex items-center gap-1">
                <Square size={16} />
                <span className="text-md mt-0.5">2,150 sqft</span>
              </span>
            </p>
            <button className="w-full py-1 px-3 bg-[#D9D9D9] rounded-[5px] mt-10 shine-button hover:shadow-md">
              View Details
            </button>
          </div>
        </div>
        <div className="rounded-[5px] bg-white text-[#272726] shadow-2xl flex flex-col">
          <div className="relative">
            <Image
              src="/Gilo.png"
              alt="Mountain View Drive property"
              width={400}
              height={192}
              className="w-full h-48 object-cover rounded-[5px]"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            />
            <p className="absolute bottom-3 right-3 px-3 py-1 rounded-full bg-[#D9D9D9]">
              $260,000
            </p>
          </div>
          <div className="p-4 flex flex-col flex-1 justify-between">
            <h4 className="text-2xl">5678 Mountain View Drive</h4>
            <p className="flex gap-1 items-center mb-2.5">
              <MapPin size={18} />
              <span className="text-lg">Pahrump, NV 89048</span>
            </p>
            <p className="text-xs flex gap-2">
              <span className="flex items-center gap-1">
                <Bed size={16} />
                <span className="text-md mt-0.5">3</span>
              </span>
              <span className="flex items-center gap-1">
                <Bath size={16} />
                <span className="text-md mt-0.5">2</span>
              </span>
              <span className="flex items-center gap-1">
                <Square size={16} />
                <span className="text-md mt-0.5">2,150 sqft</span>
              </span>
            </p>
            <button className="w-full py-1 px-3 bg-[#D9D9D9] rounded-[5px] mt-10 shine-button hover:shadow-md ">
              View Details
            </button>
          </div>
        </div>
        <div className="rounded-[5px] bg-white text-[#272726] shadow-2xl flex flex-col ">
          <div className="relative">
            <Image
              src="/Gilo.png"
              alt="Forest View Drive property"
              width={400}
              height={192}
              className="w-full h-48 object-cover rounded-[5px]"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            />
            <p className="absolute bottom-3 right-3 px-3 py-1 rounded-full bg-[#D9D9D9]">
              $300,000
            </p>
          </div>
          <div className="p-4 flex flex-col flex-1 justify-between">
            <h4 className="text-2xl">3245 Forest View Drive</h4>
            <p className="flex gap-1 items-center mb-2.5">
              <MapPin size={18} />
              <span className="text-lg">Pahrump, NV 89048</span>
            </p>
            <p className="text-xs flex gap-2">
              <span className="flex items-center gap-1">
                <Bed size={16} />
                <span className="text-md mt-0.5">3</span>
              </span>
              <span className="flex items-center gap-1">
                <Bath size={16} />
                <span className="text-md mt-0.5">2</span>
              </span>
              <span className="flex items-center gap-1">
                <Square size={16} />
                <span className="text-md mt-0.5">2,150 sqft</span>
              </span>
            </p>
            <button className="w-full py-1 px-3 bg-[#D9D9D9] rounded-[5px] mt-10 shine-button hover:shadow-md">
              View Details
            </button>
          </div>
        </div>
        <div className="rounded-[5px] bg-white text-[#272726] sm:flex hidden shadow-2xl  flex-col ">
          <div className="relative">
            <Image
              src="/Gilo.png"
              alt="Lake View Drive property"
              width={400}
              height={192}
              className="w-full h-48 object-cover rounded-[5px]"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            />
            <p className="absolute bottom-3 right-3 px-3 py-1 rounded-full bg-[#D9D9D9]">
              $450,000
            </p>
          </div>
          <div className="p-4 flex flex-col flex-1 justify-between">
            <h4 className="text-2xl">3214 Lake View Drive</h4>
            <p className="flex gap-1 items-center mb-2.5">
              <MapPin size={18} />
              <span className="text-lg">Pahrump, NV 89048</span>
            </p>
            <p className="text-xs flex gap-2">
              <span className="flex items-center gap-1">
                <Bed size={16} />
                <span className="text-md mt-0.5">3</span>
              </span>
              <span className="flex items-center gap-1">
                <Bath size={16} />
                <span className="text-md mt-0.5">2</span>
              </span>
              <span className="flex items-center gap-1">
                <Square size={16} />
                <span className="text-md mt-0.5">2,150 sqft</span>
              </span>
            </p>
            <button className="w-full py-1 px-3 bg-[#D9D9D9] rounded-[5px] mt-10 shine-button hover:shadow-md">
              View Details
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
