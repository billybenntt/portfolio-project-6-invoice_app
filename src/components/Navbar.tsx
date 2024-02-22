import {IconSun, IconMoon, IconLogo} from '../assets'
import {Link} from "react-router-dom";

function Navbar() {

    const theme = "light"

    return (
        <nav className="navbar">
            <div className="navbar-center">

                <Link to={"/"}>
                    <div className="logo" onClick={() => console.log("logo")}>
                        <div className="logo-center">
                           <span className="logo-img">
                           <img src={IconLogo} alt="page-logo" className="logo-icon"/>
                         </span>
                        </div>
                    </div>
                </Link>

                <div className="navbar__control">
                    <div className="theme">
                        {theme === "light" ?
                            <span className="theme-img"><img src={IconMoon} alt="page-logo"/></span> :
                            <span className="theme-img"><img src={IconSun} alt="page-logo"/></span>}
                    </div>
                    <div className="avatar">
                        <span>😺</span>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
