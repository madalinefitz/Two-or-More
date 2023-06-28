import {useState, useEffect} from "react"
import venn from './vennLogo.png'



function Home(){
    
    return (
        <div className="homeBackground bg-[#D6C6AA]">
            <div className="flex justify-center">
                <div className="text-6xl pb-8" >Welcome, we're glad you're here.</div>
            </div>
            <img alt='venn diagram' src={venn} className="venn"/>
            <div className="items-center content-center w-1/2 text-center text-2xl m-auto pt-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </div>
        </div>
    )
}

export default Home