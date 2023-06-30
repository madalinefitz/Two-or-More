import {useState, useEffect} from "react"
import venn from './vennLogo.png'



function Home(){
    
    return (
        <div className="bg-[#D6C6AA] p-10">
            <div className="flex justify-center">
                <div className="text-6xl pb-8">Welcome, we're glad you're here.</div>
            </div>
            <img alt='venn diagram' src={venn} className="venn"/>
            <div className="flex justify-between m-3 mt-8">
                <div className="text-[#D6C6AA] bg-[#292929] items-center content-center w-1/3 text-center text-2xl m-2 p-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </div>
                <div className="text-[#D6C6AA] bg-[rgb(41,41,41)] items-center content-center w-1/3 text-center text-2xl m-2 p-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </div>
                <div className="text-[#D6C6AA] bg-[#292929] items-center content-center w-1/3 text-center text-2xl m-2 p-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </div>
            </div>
        </div>
    )
}

export default Home