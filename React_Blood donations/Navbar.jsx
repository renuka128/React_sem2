import React from "react";
import { Link } from "react-router-dom";
function Navbar(){
    return(
        <nav>
            <ol>
                <Link to="/r1">r1</Link>
                <Link to="/r2">r2</Link>
            </ol>
        </nav>
    )
}
export default Navbar;