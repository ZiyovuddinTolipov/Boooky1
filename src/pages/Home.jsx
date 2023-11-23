import Navbar from "../components/home/Navbar"
import Hero from "../components/home/Hero"
import About from "../components/home/About"
import Projects from "../components/home/Projects"
import Work from "../components/home/Work"

const Home = () => {
    return (
        <main className="max-w-[1600px] mx-auto">
            <Navbar />
            <Hero />
            <About />
            <Projects />
            <Work />
        </main>
    )
}

export default Home