import { Star } from "lucide-react";
import Image from "next/image";

export default function StatisfiedCustomer() {
  return (
    <main className="bg-[#D9D9D9] sm:p-8 sm:py-12 py-12 p-5">
      <h1 className="text-[#272726] text-center sm:text-3xl text-2xl">
        Satisfied Clients
      </h1>

      <p className="text-md text-[#272726] mb-4 text-center pb-4">
        Don't just take our word for it. Here's what real clients have to say
        about their experience with The Ridge Realty Group.
      </p>
      <section className="sm:grid-cols-2 grid-cols-1 grid max-w-5xl m-auto gap-4">
        <div className="bg-white p-5 py-8 rounded-[5px] text-[#272726] flex flex-col justify-between shadow-2xl transition-transform duration-300 hover:scale-105 hover:rotate-1">
          <span className="flex items-center gap-1 ">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={20} fill={i < 4 ? "#fdc700" : "#FFFFFF"} className="text-[#fdc700]"/>
            ))}
          </span>
          <blockquote className="py-4">
            "Marci's knowledge of Pahrump is incredible. She found us the
            perfect family home in our ideal neighborhood within our budget. Her
            attention to detail and personal touch made all the difference."
          </blockquote>
          <div className="flex justify-between items-center w-full">
            <div className="flex items-center gap-1">
              <div className="border border-amber-50 rounded-[5px] w-9 h-9 flex items-center justify-center p-0.5 bg-[#D9D9D9]">
                <Image
                  src="/Gilo.png"
                  alt="Kayrie Suzuki"
                  width={36}
                  height={36}
                  className="h-full w-full object-cover rounded-[3px]"
                />
              </div>
              <span className="flex flex-col text-sm">Kayrie Suzuki<span className="text-xs">Homeowners</span></span>
            </div>
                       <div className="flex items-center gap-1">
              <span>$281K</span>
              <div className="border border-amber-50 rounded-[5px] w-8 h-8 flex items-center justify-center p-0.5 bg-[#D9D9D9]">
                <Image
                  src="/Marci.png"
                  alt="Marci Metzger"
                  width={32}
                  height={32}
                  className="h-full w-full object-cover rounded-[3px]"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white p-5 py-8 rounded-[5px] text-[#272726] flex flex-col justify-between shadow-2xl transition-transform duration-300 hover:scale-105 hover:-rotate-1">
          <span className="flex items-center gap-1 ">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={20} fill={i < 5 ? "#fdc700" : "#FFFFFF"} className="text-[#fdc700]" />
            ))}
          </span>
          <blockquote className="py-4">
            "I've worked with many realtors across Nevada, but Marci's market
            insight and investment property expertise is unmatched. She's helped
            me build a profitable portfolio in Pahrump."
          </blockquote>
          <div className="flex justify-between items-center w-full">
            <div className="flex items-center gap-1">
              <div className="border border-amber-50 rounded-[5px] w-9 h-9 flex items-center justify-center p-0.5 bg-[#D9D9D9]">
                <Image
                  src="/Gilo.png"
                  alt="Juliet Hibana"
                  width={36}
                  height={36}
                  className="h-full w-full object-cover rounded-[3px]"
                />
              </div>
              <span className="flex flex-col text-sm">Juliet Hibana<span className="text-xs">Real Estate Investor</span></span>
            </div>
                       <div className="flex items-center gap-1">
              <span>$460K</span>
              <div className="border border-amber-50 rounded-[5px] w-8 h-8 flex items-center justify-center p-0.5 bg-[#D9D9D9]">
                <Image
                  src="/Marci.png"
                  alt="Marci Metzger"
                  width={32}
                  height={32}
                  className="h-full w-full object-cover rounded-[3px]"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white p-5 py-8 rounded-[5px] text-[#272726] flex flex-col justify-between shadow-2xl transition-transform duration-300 hover:scale-105 hover:rotate-1">
          <span className="flex items-center gap-1 ">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={20} fill={i < 5 ? "#fdc700" : "#FFFFFF"} className="text-[#fdc700]" />
            ))}
          </span>
          <blockquote className="py-4">
            "Needed to sell quickly due to relocation. Marci's aggressive
            marketing got us 3 offers in the first week! Her communication and
            follow-through were outstanding throughout."
          </blockquote>
          <div className="flex justify-between items-center w-full">
            <div className="flex items-center gap-1">
              <div className="border border-amber-50 rounded-[5px] w-9 h-9 flex items-center justify-center p-0.5 bg-[#D9D9D9]">
                <Image
                  src="/Gilo.png"
                  alt="Marci Cabral"
                  width={36}
                  height={36}
                  className="h-full w-full object-cover rounded-[3px]"
                />
              </div>
              <span className="flex flex-col text-sm">Marci Cabral<span className="text-xs">Client Seller</span></span>
            </div>
                       <div className="flex items-center gap-1">
              <span>$360K</span>
              <div className="border border-amber-50 rounded-[5px] w-8 h-8 flex items-center justify-center p-0.5 bg-[#D9D9D9]">
                <Image
                  src="/Marci.png"
                  alt="Marci Metzger"
                  width={32}
                  height={32}
                  className="h-full w-full object-cover rounded-[3px]"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white p-5 py-8 rounded-[5px] text-[#272726] flex flex-col justify-between shadow-2xl transition-transform duration-300 hover:scale-105 hover:-rotate-1">
          <span className="flex items-center gap-1 ">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={20} fill={i < 5 ? "#fdc700" : "#FFFFFF"} className="text-[#fdc700]" />
            ))}
          </span>
          <blockquote className="py-4">
            "As first-time buyers, we were nervous about the process. Marci
            guided us every step of the way with patience and expertise. We
            couldn't be happier with our new home!"
          </blockquote>
          <div className="flex justify-between items-center w-full">
            <div className="flex items-center gap-1">
              <div className="border border-amber-50 rounded-[5px] w-9 h-9 flex items-center justify-center p-0.5 bg-[#D9D9D9]">
                <Image
                  src="/Gilo.png"
                  alt="Deborah Mills"
                  width={36}
                  height={36}
                  className="h-full w-full object-cover rounded-[3px]"
                />
              </div>
              <span className="flex flex-col text-sm">Deborah Mills<span className="text-xs">First-time buyer</span></span>
            </div>
            <div className="flex items-center gap-1">
              <span>$300K</span>
              <div className="border border-amber-50 rounded-[5px] w-8 h-8 flex items-center justify-center p-0.5 bg-[#D9D9D9]">
                <Image
                  src="/Marci.png"
                  alt="Marci Metzger"
                  width={32}
                  height={32}
                  className="h-full w-full object-cover rounded-[3px]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="sm:p-9 px-5 py-9 bg-white rounded-[5px] text-[#272726] max-w-5xl m-auto mt-8 grid grid-cols-3  gap-4 text-center shadow-2xl">
        <span className="flex flex-col items-center justify-center text-xl">
          98.9%<span className="text-xs">Client Satifaction</span>
        </span>
        <span className="flex flex-col items-center justify-center text-xl">
          90+ <span className="text-xs">Happy Clients</span>
        </span>
        <span className="flex flex-col items-center justify-center text-xl">
          30+<span className="text-xs">Years of Service</span>
        </span>
      </div>
    </main>
  );
}
