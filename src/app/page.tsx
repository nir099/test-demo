import About from "@/components/About";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";

export default function Home() {
    return (
        <div className="min-h-screen bg-gray-50 text-gray-800">
            <Header />
            <main>
                <Hero />
                <About />
                <Skills />
                <Projects />
            </main>
            <Footer />
        </div>
    );
}
