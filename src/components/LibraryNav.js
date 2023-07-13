import React from "react";
import { Link } from "react-router-dom";

function LibraryNav(){

    return(
    
        <nav className="bg-[#E8E4DE] z-20 flex shrink-0 grow-0 gap-4 p-2.5 shadow-lg backdrop-blur-lg dark:bg-slate-800/50 fixed top-2/4 -translate-y-2/4 left-6 min-h-[auto] min-w-[64px] flex-col">
            <div className="divide-y-[1px] divide-[#292929]">
                <div className="hover:bg-[#D6C6AA] p-2 bg-[#E8E4DE] flex aspect-square min-h-[80px] w-25 flex-col items-center justify-center">
                    <Link to="vocabulary" >
                        <div className="text-[#292929]-300 text-lg font-medium"> Vocabulary </div>
                    </Link>
                </div>
                
                <div className="hover:bg-[#D6C6AA] p-2 bg-[#E8E4DE] flex aspect-square min-h-[80px] w-25 flex-col items-center justify-center">
                    <Link to="materials" >
                        <div className="text-[#292929]-300 text-lg font-medium"> Reading Materials </div>
                    </Link>
                </div>
                <div className="hover:bg-[#D6C6AA] p-2 bg-[#E8E4DE] flex aspect-square min-h-[80px] w-25 flex-col items-center justify-center">
                    <Link to="books" >
                        <div className="text-[#292929]-300 text-lg font-medium"> Book Suggestions </div>
                    </Link>
                </div>
            </div>               
        </nav>
    )
}

export default LibraryNav