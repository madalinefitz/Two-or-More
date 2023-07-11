import { useState, useEffect } from "react"

export default function Stories () {
    const [stories, setStories] = useState([])

    const displayStories = stories.map(s => {
        return (
            
        )
    })


    return (
        <div className="bg-[#D6C6AA] bg-cover h-screen">
            <div className= "flex justify-center">
                <h1 className="text-8xl m-5">We all have a story.</h1>
            </div>

            
        </div>
    )
}