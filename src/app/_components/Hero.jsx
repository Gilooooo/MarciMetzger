export default function Hero() {
  return (
    <main className="p-3 bg-[url('/Gilo.png')] bg-cover sm:bg-start bg-center bg-no-repeat text-white space-y-4" >
      <section className="sm:p-9 px-2 py-9 h-[60dvh] bg flex flex-col justify-center sm:max-w-5xl">
        <p className="sm:text-3xl text-lg" >MARCI METZGER - THE RIDGE REALITY GROUP</p>
        <h1
          className="sm:text-8xl text-4xl"
          style={{ fontFamily: "'Times New Roman', Times, serif" }}
        >
          PAHRUMP REALTOR
        </h1>
        <p className="text-xl text-gray-300">
          Nearly 30 years helping Pahrump families buy and sell with confidence.
          Local expertise meets modern marketing.
        </p>
      </section>
    </main>
  );
}
