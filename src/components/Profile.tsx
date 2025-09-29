

const Profile = () => {
  return (
    <div className=" p-4 flex justify-center items-center gap-6">
      {/* we don't need to import image if image is inside the public folder */}
      <img className="w-[120px] h-[120px] rounded-full object-cover border-[#CFCFEA] border-4" src="/IMG_8607.JPG" alt="Aras profile image" />
      <div>
        <p className="text-2xl font-semibold">Aras Azizi</p>
        <p className="text- mt-2 pl-2">Frontend Developer</p>
      </div>
    </div>
  )
}

export default Profile; 