function Navbar() {

    const theme = "light"

    return (
        <nav className="navbar">
            <div className="navbar-center">
                <div className="logo">
                    <span className="logo-img">🐵</span>
                </div>
                <div className="theme">
                    {theme === "light" ? <span>🌙</span> : <span>☀️</span>}
                </div>
                <div className="avatar">
                    <span>😺</span>
                </div>
            </div>

        </nav>
    )
}

export default Navbar
