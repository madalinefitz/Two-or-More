import {useState, useEffect} from "react"

export default function LibBooks() {
    // const [books, setBooks] = useState([])

    // useEffect(()=>{
    //     fetch('url')
    //         .then(r => r.json())
    //         .then(data = setBooks(data))
    // }, [])

    // const bookComponents = books.map(book => {
    //     return (
    //         <div>
    //             <img src={book.img} alt={`${book.title} cover`} />
    //             <h1>{book.title}</h1>
    //             <div>{book.amazonLink}</div>
    //         </div>
    //     )
    // })


    return(
        // <>
        //     {bookComponents}
        // </>
        <div class="flex ps-60 pt-14">
            <div class="w-1/2">
                <div class="max-w-sm rounded overflow-hidden shadow-lg">
                    <img class="w-full" src="https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80" alt="milk and honey book"/>
                    <div class="px-6 py-4">
                        <div class="font-bold text-xl mb-2">Milk and Honey</div>
                        <p class="text-gray-700 text-base">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                        </p>
                    </div>
                    <div class="flex items-center">
                        <img class="w-10 h-10 rounded-full mr-4" src="https://static01.nyt.com/images/2017/12/17/books/review/17WilsonSub/17WilsonSub-superJumbo.jpg" alt="rupi kaur"/>
                        <div class="text-sm">
                            <p class="text-gray-900 leading-none">rupi kaur</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="w-1/2">
                <div class="max-w-sm rounded overflow-hidden shadow-lg">
                    <img class="w-full" src="https://images.unsplash.com/photo-1542871793-fd7e2b3cd0b8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=752&q=80" alt="design anthology"/>
                    <div class="px-6 py-4">
                        <div class="font-bold text-xl mb-2">Design Anthology</div>
                        <p class="text-gray-700 text-base">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                        </p>
                    </div>
                    <div class="flex items-center">
                        <img class="w-10 h-10 rounded-full mr-4" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8MXwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="author"/>
                        <div class="text-sm">
                            <p class="text-gray-900 leading-none">Author</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}