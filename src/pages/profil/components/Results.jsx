import { Link } from "react-router-dom"
import { AiOutlineArrowsAlt } from "react-icons/ai"
const Results = () => {
    localStorage.setItem('profile_results', "profile_results_recent")
    const sty = {
        navBtn: "text-slate-100 md:space-x-2 flex items-center rounded-[5px] px-3 py-[10px] font-mediumwhitespace-nowrap"
    }
    const profileNav = localStorage.getItem('profile_results');
    return (
        <>
            <nav className="flex justify-between items-center">
                <div className="flex gap-2">
                    <button
                        className={`${sty.navBtn} ${profileNav == "profile_results_recent" ? "bg-zinc-400/20" : ""}`}
                        onClick={localStorage.setItem('profile_results', "profile_results_recent")}
                    >
                        Recent AC
                    </button>
                    <button
                        className={`${sty.navBtn} ${profileNav == "profile_results_solutions" ? "bg-zinc-400/20" : ""}`}
                        onClick={localStorage.setItem('profile_results', "profile_results_solutions")}
                    >
                        Solutions
                    </button>
                    <button
                        className={`${sty.navBtn} ${profileNav == "profile_results_discuss" ? "bg-zinc-400/20" : ""}`}
                        onClick={localStorage.setItem('profile_results', "profile_results_discuss")}
                    >
                        Discuss
                    </button>
                </div>
                <div>
                    <Link className="text-slate-400 text-sm hover:text-slate-300 flex whitespace-nowrap gap-1">View All submissions <AiOutlineArrowsAlt size={20} /></Link>
                </div>
            </nav>
            <div className="min-h-[200px] flex flex-col items-center justify-center text-slate-300 ">
                <img src="img" alt="img" />
                <p>no recent submissions</p>
            </div>
        </>
    )
}

export default Results