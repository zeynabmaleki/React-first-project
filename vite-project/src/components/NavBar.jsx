import '../css/NavBar.css'
import { Link } from "react-router-dom"


function NavBar(){
    return (
        <nav className="navbar">
            <div className="logo">
                <Link to="/">Movie App</Link>
            </div>
            <ul className="navbar-links">
                <Link to="/" className="nav-link">Home</Link>
                <Link to="/favorites" className="nav-link">Favorites</Link>
            </ul>

        </nav>
    )
}


export default NavBar