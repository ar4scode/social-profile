const Skills = () => {
  const skills = [
    { name: "HTML", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" },
    { name: "CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" },
    { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" },
    { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" },
    { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" },
    { name: "TailwindCSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" },
    { name: "React Router", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/reactrouter/reactrouter-original.svg" },
    { name: "Sass", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sass/sass-original.svg" },
  ];

  return (
    <div className="p-6">
      <h1 className="text-sm text-gray-400 mx-2">/Skills</h1>
      <ul className="mx-4 mt-4 grid grid-cols-2 sm:grid-cols-3 gap-3">
        {skills.map((skill) => (
          <li
            key={skill.name}
            className="flex items-center text-sm gap-2 shadow-sm shadow-[#CFCFEA] p-2 rounded-md"
          >
            <img className="w-5 h-5" src={skill.icon} alt={skill.name} />
            <p className="sm:text-left text-nowrap text-[#D3F9B5]">{skill.name}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Skills;
