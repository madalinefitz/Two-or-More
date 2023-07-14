import LibraryNav from "./LibraryNav"
import {Routes, Route} from 'react-router-dom'
import LibBooks from "./LibBooks"
import LibMaterials from "./LibMaterials"
import LibVocabulary from "./LibVocabulary"



export default function Library() {

    return (
        <div className="bg-[#D6C6AA] bg-cover h-screen">
            <div className="text-5xl text-center pt-10">What's Inspiring Our Community</div>
            <LibraryNav/>
            <Routes>
                    <Route exact path="vocabulary" element={<LibVocabulary />}/>
                    <Route exact path="materials" element={<LibMaterials />} />
                    <Route exact path="books" element={<LibBooks />} />
            </Routes>
        </div>
    )
}