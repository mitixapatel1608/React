import { Link, NavLink } from "react-router-dom";
import "../assets/Navbar.css"

function Navbar(){
    return(
        <>
        <nav>
            {/*<Link to="/home">Home</Link>{" | "}
            <Link to="/products">Products</Link>{" | "}
            <Link to="/about">About US</Link>{" | "}
            <Link to="/contact">Contact</Link>*/}
            <NavLink to="/home" className={({isActive}) => isActive ? "Active":""}>Home</NavLink> |{" "}
            <NavLink to="/products" className={({isActive}) => isActive ? "Active":""}>Products</NavLink> |{" "}
            <NavLink to="/about" className={({isActive}) => isActive ? "Active":""}>About</NavLink> |{" "}
            <NavLink to="/contact" className={({isActive}) => isActive ? "Active":""}>Contact</NavLink> 
            
        </nav>
        </>
    );
}
export default Navbar;