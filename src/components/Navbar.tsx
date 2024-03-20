import {IconSun, IconMoon, IconLogo} from '@/assets/icons'
import {ImageAvatar} from '@/assets/images'
import {Link} from "react-router-dom";
import {useEffect} from "react";
import {useAppDispatch, useAppSelector} from '@/store/hooks.ts';
import {toggleTheme} from "@/store/features/Invoice/invoiceSlice.ts";

function Navbar() {

    const {currentTheme} = useAppSelector(store => store.invoice)
    const dispatch = useAppDispatch()

    useEffect(() => {
        document.documentElement.className = currentTheme
    }, [currentTheme])


    const handleThemeChange = () => {
        if (currentTheme === 'dark') {
            dispatch(toggleTheme("light"))

        } else {
            dispatch(toggleTheme("dark"))

        }
    }


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
                    <div className="theme" onClick={handleThemeChange}>
                        {currentTheme === "light" ?
                            <span className="theme-img">
                                <IconMoon/>
                            </span> :
                            <span className="theme-img">
                                <IconSun/>
                            </span>}
                    </div>
                    <div className="avatar">
                        <img src={ImageAvatar} alt="avatar-img" className="avatar-img" />
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
