import {useSelector} from "react-redux";
import {RootState} from "../store";


function LoginPage() {
    const isLoggedIn = useSelector((state: RootState) => state.auth.isAuthenticated);

    return (
        <div>

        </div>
    )
}