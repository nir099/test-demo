import Link from "next/link"

export default function Header() {
  return (
    <header className="sticky top-0 z-10 bg-white shadow-sm">
      <nav className="container mx-auto px-6 py-4">
        <ul className="flex justify-end space-x-8">
          <li>
            <Link href="#about" className="hover:text-gray-600">
              About
            </Link>
          </li>
          <li>
            <Link href="#skills" className="hover:text-gray-600">
              Skills
            </Link>
          </li>
          <li>
            <Link href="#projects" className="hover:text-gray-600">
              Projects
            </Link>
          </li>
          <li>
            <Link href="#contact" className="hover:text-gray-600">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

