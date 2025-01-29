export default function Skills() {
  const skills = ["JavaScript", "TypeScript", "React", "Node.js", "Python", "SQL", "Git", "AWS"]

  return (
    <section id="skills" className="bg-gray-100 py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-semibold mb-8 text-center">Skills</h2>
        <div className="flex flex-wrap justify-center gap-4">
          {skills.map((skill, index) => (
            <span key={index} className="bg-white px-4 py-2 rounded-full shadow">
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}

