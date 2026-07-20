import { Menu, ChevronDown } from "lucide-react";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full h-16 bg-white shadow-md flex items-center justify-between px-6 z-50">
      {/* Left */}
      <div className="flex items-center gap-5">
        <Menu className="cursor-pointer" />

        <h1 className="text-2xl font-bold">
          Sachin<span className="text-blue-600">/Sky</span>
        </h1>

        <input
          type="text"
          placeholder="Search..."
          className="w-80 px-4 py-2 rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Right */}
      <div className="flex items-center gap-3">
        <img
          src="https://i.pravatar.cc/100?img=12"
          alt="Profile"
          className="w-10 h-10 rounded-full object-cover"
        />

        <ChevronDown className="cursor-pointer" />
      </div>
    </header>
  );
};

export default Header;