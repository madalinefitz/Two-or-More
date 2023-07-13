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
//                     <div onClick={handleFlip} class="bg-[#292929] rounded-full shadow-xlg max-w-sm col-span-2">
//                         <h1 class="text-[#E8E4DE]">{word.definition}</h1>
//                     </div> 
//                     :
//                     <div onClick={handleFlip} class="bg-[#292929] rounded-full shadow-xlg max-w-sm">
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
        <div class="container mx-auto align-content-center p-20">
            <div class="flex">
                <div>{wordComponent}</div>
                <div class="flex-1">
                    {showBack?
                        <div onClick={handleFlip} class="bg-[#292929] rounded-full shadow-xlg ">
                            <h1 class="text-[#E8E4DE]">Definition</h1>
                        </div> 
                        :
                        <div onClick={handleFlip} class="bg-[#292929] rounded-full shadow-xlg max-w-sm">
                            <h1 class="text-[#E8E4DE]">New Word</h1>
                        </div>
                    }
                </div>
                <div>
                    {showBack2?
                        <div onClick={handleFlip2} class="bg-[#292929] rounded-full shadow-xlg max-w-sm col-span-2">
                            <h1 class="text-[#E8E4DE]">Definition2</h1>
                        </div> 
                        :
                        <div onClick={handleFlip2} class="bg-[#292929] rounded-full shadow-xlg max-w-sm">
                            <h1 class="text-[#E8E4DE]">New Word2</h1>
                        </div>
                    }
                </div>
                <div>
                    {showBack3?
                        <div onClick={handleFlip3} class="bg-[#292929] rounded-full shadow-xlg max-w-sm col-span-2">
                            <h1 class="text-[#E8E4DE]">Definition3</h1>
                        </div> 
                        :
                        <div onClick={handleFlip3} class="bg-[#292929] rounded-full shadow-xlg max-w-sm">
                            <h1 class="text-[#E8E4DE]">New Word3</h1>
                        </div>
                    }
                </div>
                <div>
                    {showBack4?
                        <div onClick={handleFlip4} class="bg-[#292929] rounded-full shadow-xlg max-w-sm col-span-2">
                            <h1 class="text-[#E8E4DE]">Definition4</h1>
                        </div> 
                        :
                        <div onClick={handleFlip4} class="bg-[#292929] rounded-full shadow-xlg max-w-sm">
                            <h1 class="text-[#E8E4DE]">New Word4</h1>
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}