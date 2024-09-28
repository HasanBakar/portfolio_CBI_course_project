import "./Projects.css";
const Projects = () => {
    const projectsList =[
        {
          id: 1,
        title: "School Website and management software",
        description: "School Management software and a school website with admin panel for school management. It has features like student management, teacher management, parent management, and attendance management.",
        technologies: ["HTML", "CSS", "JavaScript", "React", "Node.js", "MongoDB"],
        link: "https://github.com/hasanBakar/management-system",
      },
        {
          id : 2,
        title: "School Website and management software",
        description: "School Management software and a school website with admin panel for school management. It has features like student management, teacher management, parent management, and attendance management.",
        technologies: ["HTML", "CSS", "JavaScript", "React", "Node.js", "MongoDB"],
        link: "https://github.com/hasanBakar/management-system",
      },
        {
          id: 3,
        title: "School Website and management software",
        description: "School Management software and a school website with admin panel for school management. It has features like student management, teacher management, parent management, and attendance management.",
        technologies: ["HTML", "CSS", "JavaScript", "React", "Node.js", "MongoDB"],
        link: "https://github.com/hasanBakar/management-system",
      },
        {
          id: 4,
        title: "School Website and management software",
        description: "School Management software and a school website with admin panel for school management. It has features like student management, teacher management, parent management, and attendance management.",
        technologies: ["HTML", "CSS", "JavaScript", "React", "Node.js", "MongoDB"],
        link: "https://github.com/hasanBakar/management-system",
      },
        {
          id: 5,
        title: "School Website and management software",
        description: "School Management software and a school website with admin panel for school management. It has features like student management, teacher management, parent management, and attendance management.",
        technologies: ["HTML", "CSS", "JavaScript", "React", "Node.js", "MongoDB"],
        link: "https://github.com/hasanBakar/management-system",
      },
        {
          id: 6,
        title: "School Website and management software",
        description: "School Management software and a school website with admin panel for school management. It has features like student management, teacher management, parent management, and attendance management.",
        technologies: ["HTML", "CSS", "JavaScript", "React", "Node.js", "MongoDB"],
        link: "https://github.com/hasanBakar/management-system",
      }
    ]
    return (
        <section id="projects" className="projects-section">
            <h2>My Projects</h2>
            <div className="projects-container">
                {projectsList.map((project) => (
                    <div className="project-card" key={project.id}>
                        <h3>{project.title}</h3>
                        <p>{project.description}</p>
                        <p>Technologies: {project.technologies.join(", ")}</p>
                        <a href={project.link} target="_blank" rel="noopener noreferrer">
                            View Project
                        </a>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Projects;