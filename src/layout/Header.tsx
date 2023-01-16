import classes from './Header.module.scss';
import {Outlet, useNavigate} from "react-router-dom";
import {useSelector} from "react-redux";
import {RootState} from "../store";
import logo from '../assets/logo512.png';
import Button from "../UI/Button";
import Clickable from "../UI/Clickable";

function Header() {
    const isLoggedIn = useSelector((state: RootState) => state.auth.isAuthenticated);
    const nav = useNavigate();

    return (
        <header className={classes.header}>
            <div className={classes.logo}>
                <img src={logo} alt="CTF Battle logo"/>
                <h1>CTF BATTLE</h1>
            </div>
            <nav className={classes.navigation}>
                { isLoggedIn ?
                    <>
                        GUGUGAGA
                    </> :
                    <>
                        <Clickable onClick={() => nav('/login')}>Login</Clickable>
                        <Button onClick={() => nav('/signup')}>Sign Up</Button>
                </> }
            </nav>
            <Outlet/>
        </header>
    )
}

export default Header;