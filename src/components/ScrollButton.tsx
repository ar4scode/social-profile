import { useEffect, useState } from "react"
import { FaAngleUp } from "react-icons/fa6";

const ScrollButton = () => {
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
      const handleScroll = () => {
        if(window.scrollY > 300) {
          setIsVisible(true)
        } else {
          setIsVisible(false)
        }
      }

      
      window.addEventListener("scroll", handleScroll)
      return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    const handleClick = () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    };
    
  return (
    isVisible && 
      <button
        onClick={handleClick}
        className="z-50 flex gap-2 items-center font-semibold text-sm text-black fixed bottom-4 right-4 cursor-pointer bg-[#D3F9B5] p-2 md:p-4 rounded-full shadow-sm hover:bg-[#c1eb9f] transition hover:shadow-[#c1eb9f]"
      >
        <FaAngleUp />
        <span className="hidden md:inline">BACK TO TOP</span>
      </button>

  )
}

export default ScrollButton;