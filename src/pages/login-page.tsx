import {useSelector} from "react-redux";
import {RootState} from "../store";


function LoginPage() {
    const isLoggedIn = useSelector((state: RootState) => state.auth.isLoggedIn);

    return (
        <div>

        </div>
    )
}