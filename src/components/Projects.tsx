import Image from "next/image"

export default function Projects() {
  const projects = [
    { name: "Project 1", description: "A brief description of Project 1" },
    { name: "Project 2", description: "A brief description of Project 2" },
    { name: "Project 3", description: "A brief description of Project 3" },
  ]

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-semibold mb-8 text-center">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <Image
                src={`/placeholder.svg?height=200&width=300`}
                alt={project.name}
                width={300}
                height={200}
                className="mb-4 rounded"
              />
              <h3 className="text-xl font-semibold mb-2">{project.name}</h3>
              <p>{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

