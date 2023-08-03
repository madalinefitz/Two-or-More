import {useState, useEffect} from "react"

export default function LibVocabCard ({definition, term}) {
    const [showBack, setShowBack] = useState(false)
    const handleFlip = () => {
        setShowBack(!showBack)
    }

    return(
        <div>
            {showBack ?
                <div onClick={handleFlip} class="hover:cursor-pointer bg-[#E8E4DE] rounded-full shadow-lg backdrop-blur-lg dark:bg-slate-800/50 w-52 h-52 m-10 p-10">
                    <p class="text-[#292929] text-xl text-center font-semibold">{definition}</p>
                </div> 
                :
                <div onClick={handleFlip} class="hover:cursor-pointer bg-[#292929] rounded-full shadow-lg backdrop-blur-lg dark:bg-slate-800/50 w-52 h-52 m-10 p-10">
                    <h1 class="text-[#E8E4DE] text-xl text-center font-semibold">{term}</h1>
                </div>
            }
        </div>
    )
}