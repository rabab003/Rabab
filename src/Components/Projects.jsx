import { useRef } from "react";
import { PROJECTS } from "../constants";


const Projects = () => {
    const projectsRef = useRef(null)
  return (
    <section className="pt-16" id="projects" ref={projectsRef}>
      <div className="px-4">
        <h2 className="mb-8 text-3xl font-medium text-center lg:text-4xl">Projects</h2>
      
        <div className="flex flex-wrap justify-center"> {PROJECTS.map((project) => (
            <div key={project.id} className="flex flex-col w-full p-4 md:w-1/2 lg:w-1/3">

                <div className="flex-grow overflow-hidden border rounded-lg border-purple-300/20">
                <a href={project.link} target="_blank" rel="noopener noreferrer">
                    <img src={project.imgSrc} alt={project.title} className="object-cover w-full h-60"/>
                </a>
                <div className="p-6">
                    <h3 className="mb-2 text-lg font-medium lg:text-2xl">{project.title}</h3>
                    <p className="mb-4">{project.description}</p>
                    <div className="mb-4">
                        <strong className="pb-3">Tech Stack</strong>
                        <ul>
                            {project.techStack.map((tech ,index)=> (
                                <li key={index} className="inline-block px-3 py-2 mt-3 mb-1 mr-2 text-sm font-semibold border-2 rounded-full border-pink-500/30">{tech}</li>
                            ))}
                        </ul>
                    </div>

                </div>
                
                </div>

            </div>
        ))}

        </div>
      </div>
    </section>
  )
}

export default Projects
