import profileImage from "../assets/IMG_8607.png"
import Lottie from "lottie-react";
import handWave from "../assets/lottie.json"

const Profile = () => {
  return (
    <div className="p-8 flex flex-col justify-center items-center gap-6 border-white/10">
  {/* Profile Image */}
  <div className="relative mt-8">
    <img
      className="w-[140px] h-[140px] rounded-full object-cover border-[#D3F9B5] border-4 shadow-lg"
      src={profileImage}
      alt="Aras profile image"
    />
    <span className="absolute bottom-2 right-2 w-6 h-6 bg-green-400 rounded-full border-2 border-white"></span>
  </div>

  {/* Greeting with Wave */}
  <div className="flex items-center gap-2">
    <p className="text-3xl font-bold text-[#D3F9B5]">Hi</p>
    <Lottie className="w-10" animationData={handWave} />
  </div>

  {/* Name + Title */}
  <div className="text-center">
    <p className="text-gray-400">This is</p>
    <h1 className="text-4xl font-extrabold bg-gradient-to-r from-[#D3F9B5] to-[#8f94fb] bg-clip-text text-transparent">
      Aras Azizi
    </h1>
    <p className="mt-2 text-lg text-gray-300">Frontend Developer</p>
  </div>
</div>

  )
}

export default Profile; 