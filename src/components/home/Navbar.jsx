import logo from "../../assets/logo.svg";
import {BiMenuAltRight} from "react-icons/bi";
const Navbar = () => {
    return (
        <nav className="bg-white text-black flex justify-between items-center  mt-[3em] font-semibold max-w-[1400px] mx-auto">
            <div className="">
                <img src={logo} alt="logo boooky" className="w-[25rem]" />
            </div>
            <ul className="flex gap-2 items-center">
                <li className="py-2 px-3  rounded-md">
                    <select name="language" id="lan">
                        <option value="english">English</option>
                        <option value="french">French</option>
                        <option value="spanish">Spanish</option>
                    </select>
                </li>
                <li className="py-2 px-3 bg-[#3A5AFF] text-white rounded-md">Sign In</li>
                <li className="py-2 px-3 text-[#979797] border-2 border-[#979797] rounded-md">Login in</li>
                <li className="py-2 px-3  rounded-md"><BiMenuAltRight size={40} className="text-[#3A5AFF]"/></li>
            </ul>
        </nav>
    )
}

export default Navbar