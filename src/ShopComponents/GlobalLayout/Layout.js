import {Outlet} from "react-router-dom";
import LayoutHeader from "./LayoutHeader";
import LayoutNavigation from "./LayoutNavigation";
import LayoutFooter from "./LayoutFooter";
import React from "react";
import {fetchData} from "../../Utils/fetchData";
import NoPage from "../NoPage";
import {categoryContext} from "../Contexts/categoryContext";
import {productsContext} from "../Contexts/productsContext";
import {basketContext} from "../Contexts/basketContext";
import basketItem from "../Basket/BasketItem";

const baseURL = process.env.REACT_APP_SERVER_URL

const Layout = () => {

    const [products, setProducts] = React.useState(null);
    const [categories, setCategories] = React.useState(null);
    const [basketItems, setBasketItems] = React.useState([])

    const ActionTypes = {
        addToBasket: 'ADD_TO_BASKET',
        removeFromBasket: 'REMOVE_FROM_BASKET'
    }

    React.useEffect(() => {
            fetchData(baseURL + "products").then(response => setProducts(response))
            fetchData(baseURL + "categories").then(response => setCategories(response))
    }, []);

    const handleBasketEvent = (actionType, payload) => {

        const proxyItem = {
            "payload": payload,
            "quantity": 1,
        }

        let searchItem;

        switch(actionType) {
            case ActionTypes.addToBasket:
                //checking for duplicates
                searchItem = basketItems.filter(it => it.payload.id === payload.id)
                if(searchItem.length !== 0) {
                    searchItem[0].quantity += 1
                    basketItems[searchItem.index] = searchItem
                } else {
                    setBasketItems([...basketItems, proxyItem])
                }
                return;
            case ActionTypes.removeFromBasket:
                searchItem = basketItems.filter(it => it.payload.id === payload)
                console.log(searchItem)
                if(searchItem[0].quantity > 1){
                    searchItem[0].quantity -= 1;
                    basketItem[searchItem.index] = searchItem
                } else {
                    setBasketItems(basketItems.filter(it => it.payload.id !== payload))
                }
                return
            default:
                return
        }
    }

    if (!categories) return (<NoPage errorMessage={"Networking issue, categories"}/>)
    if (!products) return (<NoPage errorMessage={"Networking issue, products"}/>)

    return (
        <div className={"mainContainer"}>
            <LayoutHeader/>
            <basketContext.Provider value={{basketItems, handleBasketEvent}}>
                <categoryContext.Provider value={categories}>
                    <productsContext.Provider value={products}>
                        <div className={"mainContentContainer"}>
                            <LayoutNavigation/>
                            <Outlet/>
                        </div>
                    </productsContext.Provider>
                </categoryContext.Provider>
            </basketContext.Provider>
            <LayoutFooter/>
        </div>
)
}

export default Layout