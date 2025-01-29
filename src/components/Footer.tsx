import { Github, Linkedin, Mail } from "lucide-react"

export default function Footer() {
  return (
    <footer id="contact" className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-semibold mb-8">Get in Touch</h2>
        <div className="flex justify-center space-x-6 mb-8">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
            <Github size={24} />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
            <Linkedin size={24} />
          </a>
          <a href="mailto:your.email@example.com" className="hover:text-gray-300">
            <Mail size={24} />
          </a>
        </div>
        <p>&copy; 2023 John Doe. All rights reserved.</p>
      </div>
    </footer>
  )
}

