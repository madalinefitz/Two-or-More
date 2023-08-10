import { useEffect, useState } from "react"

export default function LibMaterials() {
    const [digMaterials, setDigMaterials] = useState([])

    useEffect(() => {
        fetch('/digitalmaterials')
            .then(r => {
                if(r.ok) {
                    r.json().then(data => {
                        setDigMaterials(data)
                    })
                } else {
                    console.log(r.status)
                }
            })
    }, [])

    const displayDigMaterials = digMaterials.map(d => {
        return (
        <div className="p-5">
            <div className=" flex justify-between p-5">
                <div className="text-xl px-4">
                    {d.title}
                </div>
                
                <div className=" italic">
                    <a target="_blank" rel="noreferrer" href={d.link}>READ MORE</a>
                </div>
            </div>
            <div className="px-14">
                - {d.authorName}
            </div>
        </div>
        )
    })




    return(
        <div className = "flex justify-center p-5 ">
            <div className="bg-[#292929] w-2/3 text-[#E8E4DE] text-2xl p-5">
                {displayDigMaterials}
            </div>
        </div>
    )
}