import { useState } from "react"
import {Link} from 'react-router-dom'

export default function MobileNav() {
    const [showMenu, setShowMenu] = useState(false);

    const handleShow = () => {
        setShowMenu(!showMenu)
    }


    return (
        <nav className="visible sm:hidden p-2">
            <div className="px-2 sm:px-6 lg:px-8">
                <div className="flex justify-between ">
                    <div className="bg-[#525252] hover:bg-[#E8E4DE] hover:text-[#525252] text-white font-bold py-3 px-4">
                        <Link to='/connect'>GET CONNECTED</Link>
                    </div>
                    <div onClick={handleShow}  className="sm:hidden p-4 space-y-2 z-10 text-right">
                        <div className="w-6 h-0.5 bg-black"></div>
                        <div className="w-6 h-0.5 bg-black"></div>
                        <div className="w-6 h-0.5 bg-black"></div>
                    </div>

                    <ul className={showMenu ? "bg-[#525252] bg-opacity-75  absolute  left-0 top-0 w-full p-5 space-y-5 text-center rounded-b-3xl" : 
                    "hidden bg-[#525252] bg-opacity-75  absolute left-0 top-0 w-full p-7 space-y-8 text-center rounded-b-3xl"}>
                        <li>
                            <Link
                            to="/"
                            exact="true"
                            className="hover:text-gray rounded-md px-3 py-2 text-sm sm:text-xl font-medium"
                            onClick={()=> setShowMenu(!showMenu)}
                            >
                                HOME
                            </Link>
                        </li>
                        <li>
                            <Link
                            to="aboutus"
                            exact="true"
                            className="hover:text-white rounded-md px-3 py-2 text-sm sm:text-xl font-medium"
                            onClick={()=> setShowMenu(!showMenu)}
                            >
                                ABOUT US
                            </Link>
                        </li>
                        <li>
                            <Link
                            to="share"
                            exact="true"
                            className="hover:text-white rounded-md px-3 py-2 text-sm sm:text-xl font-medium"
                            onClick={()=> setShowMenu(!showMenu)}
                            >
                                SHARE
                            </Link>
                        </li>
                        <li>
                            <Link
                            to="stories"
                            exact="true"
                            className="hover:text-white rounded-md px-3 py-2 text-sm sm:text-xl font-medium"
                            onClick={()=> setShowMenu(!showMenu)}
                            >
                                STORIES
                            </Link>
                        </li>
                        <li>
                            <Link
                            to="library"
                            exact="true"
                            className="hover:text-white rounded-md px-3 py-2 text-sm sm:text-xl font-medium"
                            onClick={()=> setShowMenu(!showMenu)}
                            >
                                LIBRARY
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>    
        </nav>
    )
}