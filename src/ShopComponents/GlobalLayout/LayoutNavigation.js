import {Outlet, Link} from "react-router-dom";
import pathsStruct from "../../Utils/PathsStruct";
import {useContext} from "react";
import {categoryContext} from "../Contexts/categoryContext";

const LayoutNavigation = () => {

    const categories = useContext(categoryContext)

    return (
        <div className={"sideNavigation"}>
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
                    <li>
                        <p>Categories</p>
                        <ul>
                        {categories.map(d => (
                            <li key={d.id}>
                                <Link to={"/category/" + d.id}>{d.name}</Link>
                            </li>
                        ))}
                        </ul>
                    </li>
                </ul>
            </nav>
        </div>
    )
};

export default LayoutNavigation;
