import { Award, House, Star, Users2 } from "lucide-react";
import Image from "next/image";

export default function AboutPage() {
  return (
    <main className="p-3 py-12 bg-white text-[#272726]">
      <h1 className="sm:text-3xl text-2xl text-center py-4">About Us</h1>
      <section className="lg:p-9 sm:px-5 sm:py-8 px-2 grid lg:grid-cols-2 grid-cols-1 gap-1 sm:gap-3.5 items-center max-w-7xl m-auto">
        <Image
          src="/MarciPic.png"
          alt="Marci Metzger"
          width={400}
          height={500}
          className="order-1 lg:order-2 justify-self-center lg:h-[500px] my-5 sm:rounded-[5px] rounded-lg shadow-2xl shadow-gray-800"
          sizes="(max-width: 1024px) 100vw, 50vw"
          priority
        />
        <div className="lg:order-1 order-2">
          <div className=" space-y-4">
            <h1 className="text-4xl">Marci J. Metzger</h1>
            <p className="text-lg text-[#2e2e2d]">
              Marci was a REALTOR, then licensed Broker, in Washington State.
              Now, she is enjoying the sunshine, and helping clients in Southern
              Nevada. Having helped buyers and sellers in many markets since
              1995, she is a wealth of knowledge.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-4 mt-4 text-[#272726] w-full">
            <div className="flex flex-col justify-center gap-1 sm:gap-3 p-3 sm:p-4 bg-[#D9D9D9] rounded-[5px] w-full min-w-0 shadow-lg transition-transform duration-300 hover:scale-105 hover:rotate-1">
              <span>
                <Users2 size={36} className="sm:w-10 sm:h-10 w-9 h-9" />
              </span>
              <span className="text-xl sm:text-3xl font-bold">90+</span>
              <h3 className="text-base sm:text-xl">Clients Helped</h3>
              <span className="text-xs sm:text-sm">in 2021</span>
            </div>
            <div className="flex flex-col justify-center gap-1 sm:gap-3 p-3 sm:p-4 bg-[#D9D9D9] rounded-[5px] w-full min-w-0 relative lg:top-8 shadow-lg transition-transform duration-300 hover:scale-105 hover:-rotate-1">
              <span>
                <House size={36} className="sm:w-10 sm:h-10 w-9 h-9" />
              </span>
              <span className="text-xl sm:text-3xl font-bold">28.5 million +</span>
              <h3 className="text-base sm:text-xl">Sale volume</h3>
              <span className="text-xs sm:text-sm">closed deals</span>
            </div>
            <div className="flex flex-col justify-center gap-1 sm:gap-3 p-3 sm:p-4 bg-[#D9D9D9] rounded-[5px] w-full min-w-0 shadow-lg transition-transform duration-300 hover:scale-105 hover:rotate-1">
              <span>
                <Award size={36} className="sm:w-10 sm:h-10 w-9 h-9" />
              </span>
              <span className="text-xl sm:text-3xl font-bold">30 Years</span>
              <h3 className="text-base sm:text-xl">Experience</h3>
              <span className="text-xs sm:text-sm">in nevada</span>
            </div>
            <div className="flex flex-col justify-center gap-1 sm:gap-3 p-3 sm:p-4 bg-[#D9D9D9] rounded-[5px] w-full min-w-0 relative lg:top-8 shadow-lg transition-transform duration-300 hover:scale-105 hover:-rotate-1">
              <span>
                <Star size={36} fill="#272726" className="sm:w-10 sm:h-10 w-9 h-9" />
              </span>
              <span className="text-xl sm:text-3xl font-bold">98.9%</span>
              <h3 className="text-base sm:text-xl">Customer Satisfaction</h3>
              <span className="text-xs sm:text-sm">ratings</span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
