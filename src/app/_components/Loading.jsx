import Image from "next/image";

export default function Loading() {
  return (
    <main className="fixed inset-0 bg-white flex flex-col items-center justify-center z-50">
      <div className="flex flex-col items-center space-y-6">
        <Image 
          src="/Marci.svg" 
          alt="Marci Metzger Logo" 
          width={200} 
          height={50} 
          className="animate-pulse"
        />
      </div>
    </main>
  );
}
