import universityPic from "../assets/uni.png"

function Education() {
    return (
        <div className="p-6">
            <p className="text-sm mx-4 text-gray-400">/Education</p>
            <div className="mx-8 mt-2 text-sm flex items-center gap-4 ">
                <img className="w-8 h-8 md:w-12 md:h-12" src={universityPic} alt="" />
                <div>
                    <h4>Bachelor’s in Computer Networks Engineering</h4>
                    <p className="text-xs text-gray-400 italic pt-1">Kermanshah National Skills University — 2025 – Present</p>
                </div>
            </div>
        </div>
    )
}

export default Education;