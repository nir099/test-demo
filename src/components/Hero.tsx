import { ArrowRight } from "lucide-react"

export default function Hero() {
  return (
    <section className="bg-gray-100 py-20">
      <div className="container mx-auto px-6 text-center">
        <h1 className="text-5xl font-bold mb-4">John Doe</h1>
        <h2 className="text-2xl mb-8">Software Engineer</h2>
        <a
          href="#contact"
          className="inline-flex items-center bg-gray-800 text-white px-6 py-3 rounded-full hover:bg-gray-700 transition-colors"
        >
          Get in touch <ArrowRight className="ml-2" size={20} />
        </a>
      </div>
    </section>
  )
}

