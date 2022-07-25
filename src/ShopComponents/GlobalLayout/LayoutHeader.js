import {Outlet, Link} from "react-router-dom";
import pathsStruct from "../../Utils/PathsStruct";

const LayoutHeader = () => {

    return (

        <header className={"layoutHeader container space-around"}>
            <div className={"shopTitle"}>
                <Link to={pathsStruct.MainPage} className={"shopLink"}>ShopTitle</Link>
            </div>
            <div className={"topNavigation container space-around"}>
                <Link to={pathsStruct.BasketPage} className={"BasketLink"}>Basket</Link>
                <Link to={pathsStruct.LoginPage} className={"LoginLink"}> Login</Link>
            </div>
        </header>
    )
}

export default LayoutHeader