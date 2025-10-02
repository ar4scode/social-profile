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
    <button
      onClick={handleClick}
      className="text-black absolute bottom-4 right-4 cursor-pointer bg-[#D3F9B5] p-2 md:p-4 rounded-full shadow-sm hover:bg-[#c1eb9f] transition hover:shadow-[#c1eb9f]"
    >
      {isVisible ? <FaAngleUp /> : null}
    </button>
  )
}

export default ScrollButton;