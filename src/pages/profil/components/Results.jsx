import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { AiOutlineArrowsAlt } from "react-icons/ai"
import 'react-tabs/style/react-tabs.css';

const Results = () => {
    localStorage.setItem('profile_results', "profile_results_recent")
    const sty = {
        navBtn: "text-slate-100 md:space-x-2 flex items-center rounded-[5px] px-3 py-[10px] font-mediumwhitespace-nowrap"
    }
    const notFound =
        <>
            <img src="https://leetcode.com/_next/static/images/null_light-53585615fd723ba992bd2df7a10d10d1.png" alt="img" width={100} />
            <p>no recent submissions</p>
        </>

    const [selectedButton, setSelectedButton] = useState(localStorage.getItem('profile-results') || 'profile-results-recent');
    const handleButtonClick = (buttonName) => {
        localStorage.setItem('profile-results', buttonName);
        setSelectedButton(buttonName);
    };
    useEffect(() => {
        const storedButton = localStorage.getItem('profile_results');
        if (storedButton) {
            setSelectedButton(storedButton);
        }
    }, []);
    return (
        <>
            <nav className="flex justify-between items-center">
                <div className="flex gap-2">
                    <button
                        className={`${sty.navBtn} ${localStorage.getItem("profile-results") == "profile-results-recent" ? "bg-zinc-400/20" : ""}`}
                        onClick={() => handleButtonClick('profile-results-recent')}
                    >
                        Recent AC
                    </button>
                    <button
                        className={`${sty.navBtn} ${localStorage.getItem("profile-results")== "profile-results-solutions" ? "bg-zinc-400/20" : ""}`}
                        onClick={() => handleButtonClick('profile-results-solutions')}
                    >
                        Solutions
                    </button>
                    <button
                        className={`${sty.navBtn} ${localStorage.getItem("profile-results") == "profile-results-discuss" ? "bg-zinc-400/20" : ""}`}
                        onClick={() => handleButtonClick('profile-results-discuss')}
                    >
                        Discuss
                    </button>
                </div>
                <div>
                    <Link className="text-slate-400 text-sm hover:text-slate-300 flex whitespace-nowrap gap-1">View All submissions <AiOutlineArrowsAlt size={20} /></Link>
                </div>
            </nav>
            <div className="min-h-[200px] flex flex-col items-center justify-center text-slate-300 ">
                {
                    localStorage.getItem('profile-results') === "profile-results-recent" ? <h1>Result</h1> : null
                }
                {
                    localStorage.getItem('profile-results') === "profile-results-solutions" ? <h1>Solutions</h1> : null
                }
                {
                    localStorage.getItem('profile-results') === "profile-results-discuss" ? <h1>Discuss</h1> : null
                }
            </div>'
        </>
    )
}

export default Results;