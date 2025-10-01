import { FaLinkedinIn , FaInstagram , FaGithub } from "react-icons/fa6";


const Socials = () => {
  return (
    <div className="p-6">
      <h1 className="text-sm mx-2 text-gray-400">/Socials</h1>
      <ul className="flex gap-5 mx-4 mt-4">
        <li className="p-2 rounded-full shadow-md text-[#CFCFEA] duration-200 hover:scale-110 hover:text-[#D3F9B5]"><a className="flex items-center text-sm gap-1" href="https://github.com/ar4scode"><FaGithub /> Github</a></li>
        <li className="p-2 rounded-full shadow-md text-[#CFCFEA] duration-200 hover:scale-110 hover:text-[#D3F9B5]"><a className="flex items-center text-sm gap-1" href="https://www.instagram.com/ar4scode_/"><FaInstagram /> Instagram</a></li>
        <li className="p-2 rounded-full shadow-md text-[#CFCFEA] duration-200 hover:scale-110 hover:text-[#D3F9B5]"><a className="flex items-center text-sm gap-1" href="https://www.linkedin.com/in/ar4scode"><FaLinkedinIn /> Linkedin</a></li>
      </ul>
    </div>
  )
}

export default Socials;