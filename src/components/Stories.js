import { useState, useEffect } from "react"
import Story from "./Story"

// stories will be pulled from database!!
export default function Stories () {
    const [stories, setStories] = useState([])

    const displayStories = stories.map(s => {
        return (
            <Story key={s.id} s={s}/>
        )
    })


    return (
        <div className="bg-[#D6C6AA] bg-cover h-screen">
            <div className= "flex justify-center">
                <h1 className="text-8xl font-semibold m-5">We all have a story.</h1>
            </div>
            <div className="content-center mx-40 mb-10">
                <div className="w-full h-48 mb-10 bg-[#292929]">
                    <div className="text-[#E8E4DE] text-2xl p-6 content-center">
                    Lorem ipsum dolor sit amet consectetur adipiscing elit, massa facilisis convallis consequat primis in nullam urna, penatibus elementum ad scelerisque condimentum maecenas. Odio nunc nullam iaculis fusce praesent fringilla hac cubilia, eleifend id urna mi quis congue sodales, augue viverra nulla nascetur commodo porta risus. Mus quis fermentum odio arcu class dis mattis, sem luctus augue et ac
                    </div>
                    <div className="text-[#E8E4DE] text-2xl pl-7 content-center">
                        - unknown
                    </div>
                </div>
                <div className="w-full h-48 mb-10 bg-[#292929]">
                    <div className="text-[#E8E4DE] text-2xl p-6 content-center">
                    Lorem ipsum dolor sit amet consectetur adipiscing elit, massa facilisis convallis consequat primis in nullam urna, penatibus elementum ad scelerisque condimentum maecenas. Odio nunc nullam iaculis fusce praesent fringilla hac cubilia, eleifend id urna mi quis congue sodales, augue viverra nulla nascetur commodo porta risus. Mus quis fermentum odio arcu class dis mattis, sem luctus augue et ac
                    </div>
                    <div className="text-[#E8E4DE] text-2xl pl-7 content-center">
                        - unknown
                    </div>
                </div>
                <div className="w-full h-48 mb-10 bg-[#292929]">
                    <div className="text-[#E8E4DE] text-2xl p-6 content-center">
                    Lorem ipsum dolor sit amet consectetur adipiscing elit, massa facilisis convallis consequat primis in nullam urna, penatibus elementum ad scelerisque condimentum maecenas. Odio nunc nullam iaculis fusce praesent fringilla hac cubilia, eleifend id urna mi quis congue sodales, augue viverra nulla nascetur commodo porta risus. Mus quis fermentum odio arcu class dis mattis, sem luctus augue et ac
                    </div>
                    <div className="text-[#E8E4DE] text-2xl pl-7 content-center">
                        - unknown
                    </div>
                </div>
            </div>
            <div>
                {displayStories}
            </div>
            <div className="flex justify-center">
                <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">Find More Stories</button>
            </div>
        </div>
    )
}