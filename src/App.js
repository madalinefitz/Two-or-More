import './index.css';
import {Routes, Route} from 'react-router-dom'
import Home from './components/Home'
import AboutUs from './components/AboutUs'
import NavBar from './components/NavBar'

function App() {
  return (
    <div >
      <NavBar/>
        <Routes>
            <Route exact path="/" element={<Home/>}/>
            <Route exact path="/aboutus" element={<AboutUs />}/>
        </Routes>
    </div>
  );
}

export default App;
