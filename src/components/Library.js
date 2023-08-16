import LibraryNav from "./LibraryNav"
import {Routes, Route} from 'react-router-dom'
import LibReading from "./LibReading"
import LibDigital from "./LibDigital"
import LibVocabulary from "./LibVocabulary"



export default function Library() {

    return (
        <div className="bg-[#FDFDFD] bg-cover bg-center bg-no-repeat h-screen">
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