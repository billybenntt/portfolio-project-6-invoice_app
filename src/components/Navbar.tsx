import {IconSun, IconMoon, IconLogo} from '@/assets/icons'
import {Link} from "react-router-dom";

function Navbar() {

    const theme = "light"

    return (
        <nav className="navbar">
            <div className="navbar-center">
                <Link to={"/"}>
                    <div className="logo" onClick={() => console.log("logo")}>
                        <div className="logo-center">
                            <div className="logo-img">
                                <IconLogo className="icon"/>
                            </div>
                        </div>
                    </div>
                </Link>

                <div className="navbar__control">
                    <div className="theme">
                        {theme === "light" ?
                            <span className="theme-img">
                                <IconMoon/>
                            </span> :
                            <span className="theme-img">
                                <IconSun/>
                            </span>}
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
