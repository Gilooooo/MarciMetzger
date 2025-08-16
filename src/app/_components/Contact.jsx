import { Mail, MessageCircle, Phone } from "lucide-react";

export default function ContactPage() {
  return (
    <main className="p-5 py-12 bg-white text-[#272726]">
      <h1 className="text-[#272726] text-center sm:text-4xl text-3xl pb-9">
        Contact Us
      </h1>
      <section className="max-w-7xl m-auto flex xl:flex-row flex-col xl:items-center gap-5 xl:px-0 sm:px-5">
        <div className="flex flex-col justify-between flex-1 ">
          <h1 className="text-5xl">Ready To Make Your Move?</h1>
          <p className="text-md sm:max-w-3xl">
            Whether you're buying your first home, selling a property, or
            exploring investment opportunities in Pahrump, We are here to guide
            you through every step of the process.
          </p>
          <div className="flex flex-col sm:gap-2 gap-1">
            <div className="p-5 bg-[#D9D9D9] rounded-[5px] mt-3 flex place-items-center gap-3 transition-transform duration-300 hover:scale-105 hover:rotate-1 shadow-lg shine-contact">
              <span className="p-3 bg-amber-50 rounded-2xl">
                <Phone size={28} />
              </span>
              <div className="flex flex-col">
                <span className="font-semibold text-lg">Call Direct</span>
                <p className="text-md">(206) 919-6886</p>
                <span className="text-[10px] text-gray-600">
                  Available 7 days a week
                </span>
              </div>
            </div>
            <div className="p-5 bg-[#D9D9D9] rounded-[5px] mt-3 flex place-items-center gap-3 transition-transform duration-300 hover:scale-105 hover:-rotate-1 shadow-lg shine-contact">
              <span className="p-3 bg-amber-50 rounded-2xl">
                <MessageCircle size={28} />
              </span>
              <div className="flex flex-col">
                <span className="font-semibold text-lg">Text Message</span>
                <p className="text-md">Quick Response</p>
                <span className="text-[10px] text-gray-600">
                  Get Instant Answer
                </span>
              </div>
            </div>
            <div className="p-5 bg-[#D9D9D9] rounded-[5px] mt-3 flex place-items-center gap-3 transition-transform duration-300 hover:scale-105 hover:rotate-1 shadown-lg shine-contact">
              <span className="p-3 bg-amber-50 rounded-2xl">
                <Mail size={28} />
              </span>
              <div className="flex flex-col">
                <span className="font-semibold text-lg">Email Us</span>
                <p className="sm:text-md text-sm">marcimetzger@gmail.com</p>
                <span className="text-[10px] text-gray-600">
                  Detailed inquiries
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col flex-1">
          <span className="text-lg">Or you can visit us in our office</span>
          <h4 className="text-2xl font-semibold">
            Marci Metzger - THE RIDGE REALTY GROUP
          </h4>
          <span className="text-md text-gray-500">3190 NV-160 Suite F, Pahrump, NV 89048, United States</span>
          <div className="border-4 rounded-[5px] border-gray-300 sm:my-0 my-3">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7079.2429574817825!2d-115.95468820957161!3d36.18160879605476!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c639a25ba6af0f%3A0x5c7351dde0fbb39a!2sMarci%20Metzger%20-%20THE%20RIDGE%20REALTY%20GROUP%20-%20B1002787!5e0!3m2!1sen!2sph!4v1755315593758!5m2!1sen!2sph"
              width={600}
              height={450}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="object-cover w-full"
            ></iframe>
          </div>
        </div>
      </section>
    </main>
  );
}
