function Header(){
    return(
        <>
        <NavLink to="/products" className={({isActive}) => isActive ? "Active":""}>Products</NavLink> |{" "}
        </>
    );
}
export default Header;