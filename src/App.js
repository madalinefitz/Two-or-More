import './index.css';
import {Routes, Route} from 'react-router-dom'
import Home from './components/Home'
import AboutUs from './components/AboutUs'
import NavBar from './components/NavBar'
import Stories from './components/Stories';
import Share from './components/Share';
import Library from './components/Library';
import Footer from './components/Footer';
import GetConnected from './components/GetConnected';

function App() {
  return (
    <div >
      <NavBar/>
        <Routes>
            <Route exact path="/" element={<Home/>} />
            <Route path="/stories" element={<Stories />} />
            <Route path="/aboutus" element={<AboutUs />} />
            <Route path="/share" element={<Share />} />
            <Route path="/library/*" element={<Library />} />
            <Route path="/connect" element={<GetConnected/>} />
        </Routes>
        <Footer />
    </div>
  );
}

export default App;
