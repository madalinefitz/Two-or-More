import './App.css';
import {Routes, Route} from 'react-router-dom'
import Home from './components/Home'
import AboutUs from './components/AboutUs'
import NavBar from './components/NavBar'

function App() {
  return (
    <div >
      <NavBar/>
      <h1>Two or More</h1>
        <Routes>
            <Route exact path="/" element={<Home/>}/>
            <Route exact path="/AboutUs" element={<AboutUs />}/>
        </Routes>
    </div>
  );
}

export default App;
