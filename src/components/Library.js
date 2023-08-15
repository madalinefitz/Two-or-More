import LibraryNav from "./LibraryNav"
import {Routes, Route} from 'react-router-dom'
import LibReading from "./LibReading"
import LibDigital from "./LibDigital"
import LibVocabulary from "./LibVocabulary"



export default function Library() {

    return (
        <div className="bg-[url('https://images.unsplash.com/photo-1553903200-68b358886b13?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80')] bg-cover bg-center bg-no-repeat h-screen">
            <div className="text-5xl text-center pt-10">What's Inspiring Our Community</div>
            <LibraryNav/>
            <Routes>
                    <Route exact path="vocabulary" element={<LibVocabulary />}/>
                    <Route exact path="digital" element={<LibDigital />} />
                    <Route exact path="reading" element={<LibReading />} />
            </Routes>
        </div>
    )
}