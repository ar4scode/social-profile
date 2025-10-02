import { FaCode, FaDownload } from "react-icons/fa6";


const Navbar = () => {
  return (
    <div className="flex justify-between md:mx-auto m-4 md:max-w-2/4 rounded-2xl shadow-sm bg-[#26282c]/60 backdrop-blur-md z-20 fixed top-0 left-0 right-0 p-4 hover:shadow-[#D3F9B5] duration-250">
      <div className="flex items-center gap-2 p-2 duration-250 hover:scale-110">
        <FaCode className="w-8 h-4 md:w-10 md:h-6 text-[#D3F9B5]" />
        <h1 className="text-1xl md:text-2xl font-bold bg-gradient-to-r from-[#D3F9B5] to-[#7b81e9] bg-clip-text text-transparent">Ar4sCode</h1>
      </div>

      <div className="flex text-sm font-semibold items-center md:text-md ">
        <a
          href=""
          className="flex items-center gap-2 px-2 py-2 rounded-full transition-all duration-300 hover:shadow-sm hover:shadow-[#D3F9B5] hover:text-[#D3F9B5] text-xs md:text-sm"
        >
          <span className="transition-all duration-300">
            Resume
          </span>
          <FaDownload className="transition-all duration-300 hover:text-[#D3F9B5]" />
        </a>
        <a className="duration-300 rounded-full hover:shadow-sm px-2 py-2 hover:shadow-[#D3F9B5] hover:text-[#D3F9B5] text-xs md:text-sm" href="">Projects</a>
      </div>
    </div>
  )
}

export default Navbar;