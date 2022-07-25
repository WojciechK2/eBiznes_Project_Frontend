import {Outlet} from "react-router-dom";
import LayoutHeader from "./LayoutHeader";
import LayoutNavigation from "./LayoutNavigation";
import LayoutFooter from "./LayoutFooter";

const Layout = () => {
    return(
        <div className={"mainContainer"}>
            <LayoutHeader />
            <LayoutNavigation />
            <Outlet />
            <LayoutFooter />
        </div>
    )
}

export default Layout