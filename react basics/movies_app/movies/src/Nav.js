
import { Link } from "react-router-dom";

function Nav(){
    return(
        <nav>
            <Link to={"/"} className="nav-link">
                <h2>NotIMDb</h2>
            </Link>
            
            <ul className="nav-links">
                <Link to={"/about"} className="nav-link">
                    <li>About</li>
                </Link>
                
                <li>Watch List</li>
            </ul>
        </nav>
    );
}

export default Nav;