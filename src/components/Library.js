import LibraryNav from "./LibraryNav"
import {Routes, Route} from 'react-router-dom'
import LibBooks from "./LibBooks"
import LibMaterials from "./LibMaterials"
import LibVocabulary from "./LibVocabulary"



export default function Library() {

    return (
        <div className="bg-[#D6C6AA] bg-cover h-screen">
           <LibraryNav/>
           <Routes>
                <Route path="vocabulary" element={<LibVocabulary />}/>
                <Route path="materials" element={<LibMaterials />} />
                <Route path="books" element={<LibBooks />} />
            </Routes>
        </div>
    )
}