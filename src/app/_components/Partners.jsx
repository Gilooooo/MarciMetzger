import Image from "next/image";

export default function Partners() {
    return(
        <main className="bg-[#D9D9D9] py-4 px-5">
            <div className=" flex flex-wrap gap-2 justify-evenly items-center max-w-6xl m-auto">
            <Image src="/Partner1.png" alt="Partner 1" width={80} height={80} className="sm:h-20 sm:w-20 h-10 w-10" />
            <Image src="/Partner2.png" alt="Partner 2" width={80} height={80} className="sm:h-20 sm:w-20 h-10 w-10" />
            <Image src="/Partner3.png" alt="Partner 3" width={80} height={80} className="sm:h-20 sm:w-20 h-10 w-10" />
            <Image src="/Partner4.png" alt="Partner 4" width={80} height={80} className="sm:h-20 sm:w-20 h-10 w-10" />
            </div>

        </main>
    )
}