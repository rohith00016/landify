import { useEffect, useState } from "react";

const Navbar = () => {
  const [isFloating, setIsFloating] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 60) {
      setIsFloating(true);
    } else {
      setIsFloating(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="py-6">
      <nav
        className={`flex justify-between items-center transition-all duration-300 ${
          isFloating
            ? " mx-[300px] text-black p-4 py-3 mt-4 fixed top-0 left-0 right-0 bg-white shadow-lg z-10 rounded-lg opacity-95 justify-center"
            : "text-white  mx-[200px]"
        }`}
      >
        <a href="/" className="text-3xl font-medium">
          Landify
        </a>
        <ul className="flex gap-x-4 text-sm font-semibold">
          {["Features", "About", "Testimonials", "Pricing", "FAQs"].map(
            (item) => (
              <li
                key={item}
                className="cursor-pointer hover:bg-[#242137] hover:bg-opacity-25 p-2 px-3 rounded-md transition duration-200"
              >
                <a href={`#${item.toLowerCase()}`}>{item}</a>
              </li>
            )
          )}
        </ul>
        <button className="font-semibold bg-[#5736db] text-white px-6 py-2 rounded-md">
          Remix Template
        </button>
      </nav>
    </div>
  );
};

export default Navbar;
