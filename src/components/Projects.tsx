import { FaJxl , FaDiceSix } from "react-icons/fa6";


const Projects = () => {

  const projects = [
    {
      name: "To-Do App",
      description: "A simple to-do application to help users manage their tasks",
      icon: <FaJxl />,
      githubRepo: "https://github.com/ar4scode/todo-app",
      liveDemo : "https://ar4scode.github.io/todo-app/"
    },
    {
      name: "Tenzies Game",
      description: "Tenzies is a fast-paced dice game that’s simple but addictive",
      icon: <FaDiceSix />,
      githubRepo: "https://github.com/ar4scode/tenzies-game",
      liveDemo : "https://ar4scode.github.io/tenzies-game/"
    }
  ]
  return (
    <div className="p-1">
      <h1 className="p-6 mx-2 text-sm text-gray-400">/Projects</h1>
      <ul className="flex flex-col gap-4 p-2">
        {projects.map((project) => {
          return (
                <li className="shadow-md shadow-[#fff] rounded-md p-2 pl-4 mx-2">
                  <div className="flex items-center gap-5 mb-2">
                    <p className="font-semibold">{project.name}</p>
                    {project.icon}
                  </div>

                  <p className="text-xs">
                    {project.description}
                  </p>

                  <div className="flex gap-2 mt-3">
                    <a className="text-xs font-semibold rounded-md bg-[#2a2f4d] p-1 shadow-xs shadow-[#666] duration-200 hover:opacity-75" href={project.githubRepo}>GitHub</a>
                    <a className="text-xs font-semibold rounded-md bg-[#1b5291] p-1 shadow-xs shadow-[#666] duration-200 hover:opacity-75" href={project.liveDemo}>Live Demo</a>
                  </div>
                </li>
          )
        })}
      </ul>
    </div>
  )
}

export default Projects;