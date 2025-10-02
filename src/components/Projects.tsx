import { FaJxl , FaDiceSix } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";

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
    <div id="projects" className="p-1">
      <h1 className="p-6 mx-2 text-sm text-gray-400">/Projects</h1>
      <ul className="flex flex-col gap-4 p-2">
        {projects.map((project) => {
          return (
                <li className="shadow-md shadow-[#222] rounded-xl p-4 mx-2 
               transform transition duration-300 hover:-translate-y-2 hover:shadow-lg hover:shadow-[#333]">
          <div className="flex items-center gap-3 mb-3">
            <p className="font-semibold text-lg text-[#D3F9B5]">{project.name}</p>
            {project.icon}
          </div>

          <p className="text-sm text-gray-300">
            {project.description}
          </p>

          <div className="flex gap-3 mt-4">
            <a
              className="flex items-center gap-2 text-xs font-semibold rounded-full px-3 py-1 shadow-sm hover:scale-105 transition"
              href={project.githubRepo}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="w-3" />
              GitHub
            </a>
            <a
              className="text-xs font-semibold rounded-full px-3 py-1 
                        shadow-sm hover:scale-105 transition 
                        bg-white/10 backdrop-blur-md text-[#D3F9B5] "
              href={project.liveDemo}
              target="_blank"
              rel="noopener noreferrer"
            >
              Live Demo
            </a>

          </div>
        </li>
          )
        })}
      </ul>
    </div>
  )
}

export default Projects;