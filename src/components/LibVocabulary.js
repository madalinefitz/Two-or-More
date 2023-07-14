import {useState, useEffect} from "react"

export default function LibVocabulary() {

    const [showBack, setShowBack] = useState(false)
    //will remove excess states once vocab is pulled from DB
    const [showBack2, setShowBack2] = useState(false)
    const [showBack3, setShowBack3] = useState(false)
    const [showBack4, setShowBack4] = useState(false)

    

    //code for vocab from DB

    // const [vocab, setVocab] = useState([])
    // useEffect( ()=>{
    //     fetch('url')
    //         .then(r => r.json())
    //         .then(setVocab(data))
    //     }, []
    // )

    // const wordComponent = vocab.map( word => {
    //     return(
    //         <div>
    //             {showBack ?
//                     <div onClick={handleFlip} class="bg-[#292929] rounded-full shadow-lg backdrop-blur-lg dark:bg-slate-800/50 w-40 h-40">
//                         <h1 class="text-[#E8E4DE]">{word.definition}</h1>
//                     </div> 
//                     :
//                     <div onClick={handleFlip} class="bg-[#292929] rounded-full shadow-lg backdrop-blur-lg dark:bg-slate-800/50 w-40 h-40 justify-center p-10">
//                         <h1 class="text-[#E8E4DE]">{word.word}</h1>
//                     </div>
    //             }
    //         </div>
    //     )
    // })

    


    const handleFlip = () => {
        setShowBack(!showBack)
    }
    //will remove excess functions once vocab is pulled from DB
    const handleFlip2 = () => {
        setShowBack2(!showBack2)
    }
    const handleFlip3 = () => {
        setShowBack3(!showBack3)
    }
    const handleFlip4 = () => {
        setShowBack4(!showBack4)
    }

    return(
        <div className="container mx-auto align-content-center">
            <div className="text-center text-4xl pb-20 pt-10">
                    <h1>Words Have Meaning</h1>
            </div>
            <div className="flex flex-row pr-40 pl-40">
                {/* <div>{wordComponent}</div> */}
                <div className="basis-1/4 ">
                    {showBack?
                        <div onClick={handleFlip} className="hover:cursor-pointer bg-[#E8E4DE] rounded-full shadow-lg backdrop-blur-lg dark:bg-slate-800/50 w-52 h-52 p-10">
                            <p className="text-[#292929] text-xl text-center font-semibold">definition of word</p>
                        </div> 
                        :
                        <div onClick={handleFlip} className="hover:cursor-pointer bg-[#292929] rounded-full shadow-lg backdrop-blur-lg dark:bg-slate-800/50 w-52 h-52 p-10">
                            <p className="text-[#E8E4DE] text-3xl text-center font-semibold">New Word</p>
                        </div>
                    }
                </div>
                <div className="basis-1/4">
                    {showBack2?
                        <div onClick={handleFlip2} className="hover:cursor-pointer bg-[#E8E4DE] rounded-full shadow-lg backdrop-blur-lg dark:bg-slate-800/50 w-52 h-52 p-10">
                            <h1 className="text-[#292929] text-lg text-center font-semibold">definition of word 2</h1>
                        </div> 
                        :
                        <div onClick={handleFlip2} className="hover:cursor-pointer bg-[#292929] rounded-full shadow-lg backdrop-blur-lg dark:bg-slate-800/50 w-52 h-52 p-10">
                            <h1 className="text-[#E8E4DE] text-3xl text-center font-semibold">New Word2</h1>
                        </div>
                    }
                </div>
                <div className="basis-1/4">
                    {showBack3?
                        <div onClick={handleFlip3} className="hover:cursor-pointer bg-[#E8E4DE] rounded-full shadow-lg backdrop-blur-lg dark:bg-slate-800/50 w-52 h-52 p-10">
                            <h1 className="text-[#292929] text-lg text-center font-semibold">definition of word 3</h1>
                        </div> 
                        :
                        <div onClick={handleFlip3} className="hover:cursor-pointer bg-[#292929] rounded-full shadow-lg backdrop-blur-lg dark:bg-slate-800/50 w-52 h-52 p-10">
                            <h1 className="text-[#E8E4DE] text-3xl text-center font-semibold">New Word3</h1>
                        </div>
                    }
                </div>
                <div className="basis-1/4">
                    {showBack4?
                        <div onClick={handleFlip4} className="hover:cursor-pointer bg-[#E8E4DE] rounded-full shadow-lg backdrop-blur-lg dark:bg-slate-800/50 w-52 h-52 p-10">
                            <h1 className="text-[#292929] text-lg text-center font-semibold">definition of word 4</h1>
                        </div> 
                        :
                        <div onClick={handleFlip4} className="hover:cursor-pointer bg-[#292929] rounded-full shadow-lg backdrop-blur-lg dark:bg-slate-800/50 w-52 h-52 p-10">
                            <h1 className="text-[#E8E4DE] text-3xl text-center font-semibold">New Word4</h1>
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}