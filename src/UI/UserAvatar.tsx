import classes from './UserAvatar.module.scss';
import {useSelector} from "react-redux";
import {RootState} from "../store";

function UserAvatar() {
    const user = useSelector((state: RootState) => state.auth.user);


    return (
        <img className={classes.avatar} src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50" alt="User avatar"/>
    )
}