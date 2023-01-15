import classes from './header.module.scss';
import {Outlet, useNavigate} from "react-router-dom";
import {useSelector} from "react-redux";
import {RootState} from "../store";
import logo from '../assets/logo512.png';
import Button from "../UI/button";

function Header() {
    const isLoggedIn = useSelector((state: RootState) => state.auth.isLoggedIn);
    const nav = useNavigate();

    return (
        <header className={classes.header}>
            <div className={classes.logo}>
                <img src={logo} alt="CTF Battle logo"/>
                <h1>CTF BATTLE</h1>
            </div>
            <nav>
                { isLoggedIn ?
                    <>

                    </> :
                    <>

                </> }
            </nav>
            <Outlet/>
        </header>
    )
}

export default Header;