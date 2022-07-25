import {Outlet, Link} from "react-router-dom";
import pathsStruct from "../../Utils/PathsStruct";

const LayoutNavigation = () => {
    return (
        <aside className={"sideNavigation"}>
            <nav>
                <ul>
                    <li>
                        <Link to={pathsStruct.MainPage}>Home</Link>
                    </li>
                    <li>
                        <Link to={pathsStruct.Payments}>Payments</Link>
                    </li>
                    <li>
                        <Link to={pathsStruct.BasketPage}>Basket</Link>
                    </li>
                    <li>
                        <Link to={pathsStruct.OrdersPage}>Orders</Link>
                    </li>
                    <li>
                        <Link to={pathsStruct.LoginPage}>Login</Link>
                    </li>
                </ul>
            </nav>
        </aside>
    )
};

export default LayoutNavigation;
