import { useState } from "react";

const Navbar = () => {
  const navItems = [
    { label: "About", id: "about" },
    { label: "Projects", id: "projects" },
    { label: "Toolkit", id: "toolkit" },
    { label: "Contact", id: "contact" },
  ];
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed w-full top-0 right-0 pt-2 pb-7 z-50 opacity-95">
      <div className="pr-12 pt-12 flex font-semibold justify-between items-center">
        <button
          className={`menu hidden absolute flex-col justify-between cursor-pointer top-5 right-5 ${
            isMenuOpen ? "menu-open" : ""
          }`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        {/* Nav Links */}
        <ul
          className={`nav-links flex ml-auto mr-3 space-x-6 ${
            isMenuOpen ? "open" : ""
          }`} 
        >
          {navItems.map((item) => (
            <li className="group" key={item.id}>
              <a
                href={`#${item.id}`}
                className={`${
                  isMenuOpen
                    ? "text-white hover:text-indigo-500 transition-all duration-300"
                    : "text-gray-700 hover:text-indigo-500 transition-all duration-300"
                } transition-colors`}
                onClick={()=>setIsMenuOpen(!isMenuOpen)}
              >
                {item.label}
              </a>

            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
