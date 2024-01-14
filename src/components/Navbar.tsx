import pageLogo from '../assets/logo.svg'
import iconSun from '../assets/icon-sun.svg'
import iconMoon from '../assets/icon-moon.svg'

function Navbar() {

    const theme = "light"

    return (
        <nav className="navbar">
            <div className="navbar-center">
                <div className="logo" onClick={()=> console.log("logo")}>
                    <div className="logo-center">
                           <span className="logo-img">
                           <img src={pageLogo} alt="page-logo" className="logo-icon"/>
                         </span>
                    </div>
                </div>

                <div className="navbar__control">
                    <div className="theme">
                        {theme === "light" ?
                            <span className="theme-img"><img src={iconMoon} alt="page-logo"/></span> :
                            <span className="theme-img"><img src={iconSun} alt="page-logo"/></span>}
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
