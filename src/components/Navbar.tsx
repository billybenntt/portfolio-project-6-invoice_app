import pageLogo from '../assets/logo.svg'
import iconSun from '../assets/icon-sun.svg'
import iconMoon from '../assets/icon-moon.svg'

function Navbar() {

    const theme = "light"

    return (
        <nav className="navbar">
            <div className="navbar-center">
                <div className="logo">
                    <span className="logo-img">
                        <img src={pageLogo} alt="page-logo"/>
                    </span>
                </div>
                <div className="theme">
                    {theme === "light" ?
                        <span className="theme-img"><img src={iconMoon} alt="page-logo"/></span>:
                        <span className="theme-img"><img src={iconSun} alt="page-logo"/></span>}
                </div>
                <div className="avatar">
                    <span>😺</span>
                </div>
            </div>

        </nav>
    )
}

export default Navbar
