import Navbar from "../components/home/Navbar"
import Hero from "../components/home/Hero"
import About from "../components/home/About"
import Projects from "../components/home/Projects"
import Work from "../components/home/Work"

const Home = () => {
    return (
        <main className="w-full bg-slate-950 py-[.5em]">
            <Navbar />
            <Hero />
            <About />
            <Projects />
            <Work />
        </main>
    )
}

export default Home