export default function FindHome() {
  return (
    <main className="bg-red-600 p-8">
      <h1 className="text-center sm:text-3xl text-2xl mb-10">
        Begin Your Journey Home
      </h1>
      <form className="max-w-5xl m-auto flex flex-col justify-center space-y-2 bg-black p-3 rounded-[10px]">
        <span>Where do you want to live?</span>
        <div className="bg-green-900 rounded-[5px]">
          <input type="text" className="focus:outline-none px-3 py-1 w-full" />
        </div>
        <span>What type of property?</span>
        <div className="rounded-[5px] grid sm:grid-cols-6 grid-cols-3 gap-2 text-center">
          <button className="bg-pink-500 p-7 sm:grow-1 grow-1/2">Hello</button>
          <button className="bg-pink-500 p-7 sm:grow-1 grow-1/2">Hello</button>
          <button className="bg-pink-500 p-7 sm:grow-1 grow-1/2">Hello</button>
          <button className="bg-pink-500 p-7 sm:grow-1 grow-1/2">Hello</button>
          <button className="bg-pink-500 p-7 sm:grow-1 grow-1/2">Hello</button>
          <button className="bg-pink-500 p-7 sm:grow-1 grow-1/2">Hello</button>
        </div>
      </form>
    </main>
  );
}
