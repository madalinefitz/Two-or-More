import React from "react";
import { Link } from "react-router-dom";

function LibraryNav(){

    return(
    
        <nav className="bg-[#D6C6AA] z-20 flex shrink-0 grow-0 justify-around gap-4 border-t border-gray-200 bg-white/50 p-2.5 shadow-lg backdrop-blur-lg dark:border-slate-600/60 dark:bg-slate-800/50 fixed top-2/4 -translate-y-2/4 left-6 min-h-[auto] min-w-[64px] flex-col rounded-lg border">
            <div>
                <Link to="vocabulary" class="flex aspect-square min-h-[32px] w-16 flex-col items-center justify-center gap-1 rounded-md p-1.5 bg-indigo-50 text-indigo-600 dark:bg-sky-900 dark:text-sky-50">
                    {/* <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                    /> */}
                    <small class="text-center text-xs font-medium"> Vocabulary </small>
                </Link>
            </div>
            <div>
                <Link to="materials" class="flex aspect-square min-h-[32px] w-16 flex-col items-center justify-center gap-1 rounded-md p-1.5 bg-indigo-50 text-indigo-600 dark:bg-sky-900 dark:text-sky-50">
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                    />
                    <small class="text-center text-xs font-medium"> Materials </small>
                </Link>
            </div>
            <div>
                <Link to="books" class="flex aspect-square min-h-[32px] w-16 flex-col items-center justify-center gap-1 rounded-md p-1.5 bg-indigo-50 text-indigo-600 dark:bg-sky-900 dark:text-sky-50">
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                    />
                    <small class="text-center text-xs font-medium"> Books </small>
                </Link>
            </div>

                                
                                {/* <div className="text-[#292929]-300 hover:bg-[#E8E4DE] px-3 py-2 text-lg font-medium">
                                    
                                        Vocabulary
                                    </NavLink>
                                </div>
                                
                                <div className="text-[#292929]-300 hover:bg-[#E8E4DE] px-3 py-2 text-lg font-medium">
                                    <NavLink to='aboutus' exact='true' >
                                        Reading Material
                                    </NavLink>
                                </div>
                                <div className="text-[#292929]-300 hover:bg-[#E8E4DE] px-3 py-2 text-lg font-medium">
                                    <NavLink to='share' exact='true' >
                                        Book Suggestions
                                    </NavLink>
                                </div> */}
                            
        </nav>
    )
}

export default LibraryNav