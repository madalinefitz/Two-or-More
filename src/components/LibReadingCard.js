import {useState, useEffect} from "react"

export default function LibReadingCard({title, authorName, authorPhoto, link, bookCover}) {

    // const handleClick = () => {
    //     console.log({link})
    //     window.open({link}, '_blank', 'noreferrer')
    // }

    
    return(
        <div class="max-w-xs rounded overflow-hidden shadow-lg bg-[#292929] mx-20 cursor-pointer">
            <a href={link} target="_blank" rel="noreferrer">
                <img class="w-full max-h-40" src={bookCover} alt={`${title} cover`}/>
                <div class="px-6 py-4">
                    <h1 class="font-bold text-xl mb-2 text-[#E8E4DE]">{title}</h1>
                    <p class="text-[#E8E4DE] text-base">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                    </p>
                    <p class="text-[#E8E4DE] text-base">{link}</p>
                </div>
                <div class="flex items-center">
                    <img class="w-10 h-10 rounded-full mr-4 p-2" src={authorPhoto} alt={authorName}/>
                    <div class="text-sm">
                        <p class="text-[#E8E4DE] leading-none">{authorName}</p>
                    </div>
                </div>
            </a>
        </div> 
    )
}