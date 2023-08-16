import {useState, useEffect} from "react"
import LibReadingCard from "./LibReadingCard"

export default function LibReading() {
    const [books, setBooks] = useState([])

    useEffect(()=>{
        fetch('/reading')
            .then(r => r.json())
            .then(data => setBooks(data))
    }, [])

    const bookComponents = books.map(book => {
        return (
             <LibReadingCard key={book.id} {...book}/>
        )
    })

    return(
        <div>
            <div class="text-center text-4xl pt-10">New Book Suggestions Coming Soon!</div>
            {/* <div class="flex flex-wrap ps-72 pr-0 py-14 ">
                {bookComponents}
            </div> */}
        </div>
    )
}