import { NavLink } from "react-router-dom"

function Navbar(){

    const setActiveClass = ({isActive}) => (isActive? "active" :  "menu_nav_noActivo")

    return(
        <div className="nav_bar">
            <div>
                <NavLink className={setActiveClass} to="/">Home</NavLink>
            </div>
            <div>
                <NavLink className={setActiveClass} to="/Pokemones">Pokemones</NavLink>
            </div>
        </div>
    )
} export default Navbar