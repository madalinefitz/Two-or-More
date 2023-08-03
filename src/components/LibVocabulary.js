import {useState, useEffect} from "react"

export default function LibVocabulary() {

    const [vocab, setVocab] = useState([])
    
    useEffect( ()=>{
        fetch('/vocabulary')
            .then(r => r.json())
            .then(data => setVocab(data))
        }, []
    )


    
    const wordComponent = vocab.map( word => {
        
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