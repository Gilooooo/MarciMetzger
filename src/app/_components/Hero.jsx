import Image from "next/image";

export default function Hero() {
  return (
    <main className="relative p-3 h-[60dvh] text-white overflow-hidden">
      <Image
        src="/Gilo.png"
        alt="Pahrump landscape"
        fill
        priority
        className="object-cover object-center sm:object-left"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-black/20" />
      <section className="relative z-10 sm:p-9 px-2 py-9 h-full flex flex-col justify-center sm:max-w-5xl">
        <p className="sm:text-3xl text-lg font-medium">MARCI METZGER - THE RIDGE REALITY GROUP</p>
        <h1 className="sm:text-8xl text-4xl font-serif font-bold">
          PAHRUMP REALTOR
        </h1>
        <p className="sm:text-xl text-base text-gray-200 max-w-2xl">
          Nearly 30 years helping Pahrump families buy and sell with confidence.
          Local expertise meets modern marketing.
        </p>
      </section>
    </main>
  );
}
