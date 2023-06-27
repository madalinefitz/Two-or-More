import {useState, useEffect} from "react"
import venn from './vennBrown.png'



function Home(){
    
    return (
        <div className="homeBackground">
            <img alt='venn diagram' src={venn} className="venn"/>
        </div>
    )
}

export default Home