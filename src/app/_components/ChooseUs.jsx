import { MapPin, Medal, Megaphone, Shield, Users2 } from "lucide-react";

export default function ChooseUs() {
  return (
    <main className="bg-white sm:p-8 sm:py-12 py-12 p-5">
      <h1 className="text-[#272726] text-center sm:text-3xl text-2xl">
        Why Choose Us
      </h1>
      <p className="text-md text-[#272726] mb-4 text-center pb-4">
        Experience the difference that comes from working with Pahrump's most
        trusted real estate professional. Here's what sets our service apart.
      </p>
      <section className="grid lg:grid-cols-5 sm:grid-cols-2 grid-cols-1 gap-5 sm:max-w-7xl max-w-xl m-auto">
        <div className="bg-[#D9D9D9] p-5 rounded-[5px] text-[#272726] shadow-lg transition-transform duration-300 hover:scale-110 hover:rotate-2">
          <MapPin size={36} className="mb-2" />
          <h3 className="text-2xl">Local Market Mystery</h3>
          <p className="text-sm ">
            With 30 years in Pahrump, I know every street, school district, and
            market trend that impacts your investment.
          </p>
        </div>
        <div className="bg-[#D9D9D9] p-5 rounded-[5px] text-[#272726] shadow-lg transition-transform duration-300 hover:scale-110 hover:-rotate-2">
          <Megaphone size={36} className="mb-2" />
          <h3 className="text-2xl">Agressive Marketing</h3>
          <p className="text-sm ">
            Professional photography, social media campaigns, MLS exposure, and
            my extensive buyer network ensure maximum visibility for your
            property
          </p>
        </div>
        <div className="bg-[#D9D9D9] p-5 rounded-[5px] text-[#272726] shadow-lg transition-transform duration-300 hover:scale-110 hover:rotate-2">
          <Users2 size={36} className="mb-2" />
          <h3 className="text-2xl">Full-Service Support</h3>
          <p className="text-sm ">
            From market analysis to closing day, I handle every detail.
            Negotiation, paperwork, inspections—your success is my priority.
          </p>
        </div>
        <div className="bg-[#D9D9D9] p-5 rounded-[5px] text-[#272726] shadow-lg transition-transform duration-300 hover:scale-110 hover:-rotate-2">
          <Medal size={36} className="mb-2" />
          <h3 className="text-2xl">Proven Track Record</h3>
          <p className="text-sm ">
            $28.5M in sales, 90+ satisfied clients, and a 98.9% client
            satisfaction rating speak to exceptional results.
          </p>
        </div>
        <div className="bg-[#D9D9D9] p-5 rounded-[5px] text-[#272726] shadow-lg transition-transform duration-300 hover:scale-110 hover:rotate-2">
          <Shield size={36} className="mb-2" />
          <h3 className="text-2xl">Trust & Integrity</h3>
          <p className="text-sm ">
            Transparent communication, honest market assessments, and ethical
            practices. Your best interests always come first.
          </p>
        </div>
      </section>
    </main>
  );
}
