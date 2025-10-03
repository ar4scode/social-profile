import { FaEnvelope , FaPhone } from "react-icons/fa6";

const Contact = () => {
  return (
    <div className="flex justify-center gap-5">
      <div className="flex items-center gap-2 text-gray-400">
        <FaEnvelope className="w-3" />
        <a className="text-xs md:text-md" href="mailto:ar4sazizi@gmail.com">ar4sazizi@gmail.com</a>
      </div>
      <div className="flex items-center gap- text-gray-400">
      <FaPhone className="w-3" />
      <a className="text-xs md:text-md" href="tel:+989945652222">+98 994 565 2222</a>
      </div>
    </div>
  )
}

export default Contact;