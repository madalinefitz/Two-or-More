import {useState, useEffect} from "react"
import venn from './vennLogo.png'



function Home(){
    
    return (
        <div className="homeBackground">
            <img alt='venn diagram' src={venn} className="venn"/>
            <div className="flex justify-center">
                <div className="text-6xl" >Welcome</div>
            </div>
        </div>
    )
}

export default Home