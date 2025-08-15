import {
  House,
  Building,
  MapPin,
  Search,
  TreePine,
  Warehouse,
  BadgeDollarSign,
} from "lucide-react";

export default function FindHome() {
  return (
    <main className="bg-[#D9D9D9] p-8">
      <h1 className="text-[#272726] text-center sm:text-3xl text-2xl mb-10">
        Begin Your Journey Home
      </h1>
      <form className="max-w-5xl m-auto flex flex-col justify-center space-y-2 bg-[#f3f3f3] p-6 rounded-[10px] shadow-lg text-[#272726]">
        <span className="flex gap-2 items-center">
          <MapPin />
          Where do you want to live?
        </span>
        <div className="bg-[#D9D9D9] rounded-[5px] flex items-center px-2 py-1">
          <Search />
          <input type="text" className="focus:outline-none px-3 py-1 w-full" />
        </div>
        <span className="flex gap-2 items-center">
          <House />
          What type of property?
        </span>
        {/* Properties */}
        <div className="rounded-[5px] grid sm:grid-cols-5 grid-cols-3  gap-2 text-center">
          <button className="bg-[#D9D9D9] lg:p-9 md:p-7 sm:p-6 py-5 flex flex-col items-center justify-center">
            <span>
              <House />
            </span>
            <span className="text-[clamp(0.6rem,2vw,1rem)]">House</span>
          </button>
          <button className="bg-[#D9D9D9] lg:p-9 md:p-7 sm:p-6 py-5 flex flex-col items-center justify-center">
            <span>
              <Building />
            </span>
            <span className="text-[clamp(0.6rem,2vw,1rem)]">Codominium</span>
          </button>
          <button className="bg-[#D9D9D9] lg:p-9 md:p-7 sm:p-6 py-5 flex flex-col items-center justify-center">
            <span>
              <Building />
            </span>
            <span className="text-[clamp(0.6rem,2vw,1rem)]">Town House</span>
          </button>
          <button className="sm:flex hidden bg-[#D9D9D9] lg:p-9 md:p-7 sm:p-6 py-5 flex-col items-center justify-center">
            <span>
              <TreePine />
            </span>
            <span className="text-[clamp(0.6rem,2vw,1.2rem)]">Lots/Lands</span>
          </button>
          <button className="sm:flex hidden bg-[#D9D9D9] lg:p-9 md:p-7 sm:p-6 py-5 flex-col items-center justify-center">
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
        <span className="flex gap-2 items-center">
          <BadgeDollarSign />
          Price Range
        </span>
      </form>
    </main>
  );
}
