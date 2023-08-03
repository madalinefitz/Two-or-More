import {useState, useEffect} from "react"

export default function LibVocabulary() {

    const [showBack, setShowBack] = useState(false)
    
    const [vocab, setVocab] = useState([])
    
    useEffect( ()=>{
        fetch('/vocabulary')
            .then(r => r.json())
            .then(data => setVocab(data))
        }, []
    )

    const handleFlip = () => {
        setShowBack(!showBack)
    }

    
    const wordComponent = vocab.map( word => {
        return(
            <div>
                {showBack ?
                    <div onClick={handleFlip} class="hover:cursor-pointer bg-[#E8E4DE] rounded-full shadow-lg backdrop-blur-lg dark:bg-slate-800/50 w-52 h-52 m-10 p-10">
                        <p class="text-[#292929] text-xl text-center font-semibold">{word.definition}</p>
                    </div> 
                    :
                    <div onClick={handleFlip} class="hover:cursor-pointer bg-[#292929] rounded-full shadow-lg backdrop-blur-lg dark:bg-slate-800/50 w-52 h-52 m-10 p-10">
                        <h1 class="text-[#E8E4DE] text-xl text-center font-semibold">{word.term}</h1>
                    </div>
                }
            </div>
        )
    })


    return(
        <div className="bg-[#D6C6AA] bg-cover h-auto">
            <div className="container mx-auto align-content-center">
                <div className="text-center text-4xl pb-20 pt-10">
                        <h1>Words Have Meaning</h1>
                </div>
                <div className="flex flex-row flex-wrap pr-40 pl-40">
                    {wordComponent}
                </div>
            </div>
        </div>
    )
}