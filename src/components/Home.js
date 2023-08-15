import {useState, useEffect} from "react"
import venn from './logoHandwritten.png'



function Home(){
    
    return (
        <div className="bg-[url('https://images.unsplash.com/photo-1613316122132-81de453d8610?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80')] bg-no-repeat bg-cover bg-center p-10">
            <div className="flex justify-center">
                <div className="[word-spacing:40px] font-bold text-6xl pb-8">WELCOME, WE'RE GLAD YOU'RE HERE.</div>
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

// pinky promise https://images.unsplash.com/photo-1593526613712-7b4b9a707330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80

// mopop vibes https://images.unsplash.com/photo-1579736170791-e7ce1a38e203?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80


// paint mixed on hand https://images.unsplash.com/photo-1516146544193-b54a65682f16?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80

// https://images.unsplash.com/photo-1549144277-47d96d572dc4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=735&q=80

// https://images.unsplash.com/photo-1621341104121-d610c0dc4228?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80

// https://images.unsplash.com/photo-1618327907215-4e514efabd41?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=627&q=80