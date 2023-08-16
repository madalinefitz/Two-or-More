import { useState, useEffect } from "react"
import { Link } from "react-router-dom";
import Story from "./Story"

// stories will be pulled from database!!
export default function Stories () {
    const [stories, setStories] = useState([])

    useEffect(() => {
        fetch("https://twoormore-info-service.azurewebsites.net/stories")
            .then(r => {
                if(r.ok) {
                    r.json().then(data => {
                        setStories(data)
                    })
                }
            })
    }, [])
    

    const displayStories = stories.map(s => {
        return (
            <Story key={s.id} s={s}/>
        )
    })


    return (
        <div className="bg-[#FDFDFD] bg-cover p-10 pb-20 flex justify-center">
            <div>
            <div className= "flex justify-center ">
                <h1 className="justify-center text-8xl font-semibold m-2">We all have a story.</h1>
            </div>
            <div className= "flex justify-center ">
                <div className="text-5xl font-semibold mb-5 italic ">
                    <Link className="hover:text-white animate-pulse" to="/share">Ready to share yours?</Link>
                </div>
            </div>
            <div class="text-center text-4xl p-10">Stories Coming Soon!</div>
            {/* <div className="content-center mx-40 mb-10">
            {displayStories}
            </div> */}
            <div>
                
            </div>
            <div className="flex justify-center">
                <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">Find More Stories</button>
            </div>
            </div>
        </div>
    )
}