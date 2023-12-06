import { Link } from "react-router-dom";
// import logo from "../../assets/logo.svg";
import {BiMenuAltRight} from "react-icons/bi";
const Navbar = () => {
    return (
        <header className="w-full border-slate-700 border-b">
            <nav className="flex justify-between items-center font-semibold max-w-[1400px] mx-auto px-3  rounded-md">
            <div className="">
                <h3 className="font-bold text-white ">BOOOKY.</h3>
            </div>
            <ul className="flex gap-2 items-center text-white">
                <li className="prounded-md">
                    <select name="language" id="lan" className="bg-slate-800 p-1 rounded-xl text-white w-[100px]">
                        <option value="english">English</option>
                        <option value="french">French</option>
                        <option value="spanish">Spanish</option>
                    </select>
                </li>
                <Link className="" to='/rating'>rating</Link>
                <Link className="first-letter:" to='/register'>Sign In</Link>
                <Link className="rounded-md" to="/login">Login in</Link>
                <li className="py-2 px-3  rounded-md"><BiMenuAltRight size={40} className="text-[#3A5AFF]"/></li>
            </ul>
        </nav>
        </header>
    )
}

export default Navbar;