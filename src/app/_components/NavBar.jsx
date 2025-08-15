export default function NavBar() {
  return (
    <nav className="bg-white p-4 text-[#272726]">
      <div className="flex items-center justify-between sm:px-8 px-2">
        <span><img src="/Marci.svg" alt="" className="w-40"/></span>
        <ul className="sm:flex hidden space-x-4 ">
          <li className="hover:text-[#707070] ">Home</li>
          <li className="hover:text-[#707070]">About Us</li>
          <li className="hover:text-[#707070]">Contact Us</li>
        </ul>
      </div>
    </nav>
  );
}
