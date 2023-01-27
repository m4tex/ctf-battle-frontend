import { Outlet } from "react-router-dom";
import Header, { HeaderSpacer } from "./Header";


function Layout() {
    return (
        <>
            <Header />
            <HeaderSpacer />
            <Outlet />
        </>
    )
}

export default Layout;