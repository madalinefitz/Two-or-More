import {NavLink} from 'react-router-dom'

function NavBar(){
    return(
        <div>
        <NavLink to='/' exact>
            Home
        </NavLink>
        <NavLink to='AboutUs' exact>
            About Us
        </NavLink>
        </div>
    )
}

export default NavBar