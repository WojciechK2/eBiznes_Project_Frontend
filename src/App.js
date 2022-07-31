import './App.css';
import {Routes, Route} from "react-router-dom";
import Products from "./ShopComponents/Products/Products";
import Basket from "./ShopComponents/Basket/Basket";
import Payments from "./ShopComponents/Payments/Payments";
import NoPage from "./ShopComponents/NoPage";
import Product from "./ShopComponents/Products/Product";
import BasketItem from "./ShopComponents/Basket/BasketItem";
import Orders from "./ShopComponents/Orders/Orders";
import OrderItem from "./ShopComponents/Orders/OrderItem";
import LoginComponent from "./ShopComponents/Login/LoginComponent";
import pathsStruct from "./Utils/PathsStruct";
import Layout from "./ShopComponents/GlobalLayout/Layout";
import React, {useEffect, useState} from "react";
import Category from "./ShopComponents/Categories/Category";
import {loggedInContext} from "./ShopComponents/Contexts/loggedInContext";
import {fetchDataWithCredentials} from "./Utils/fetchDataWithCredentials";

const baseURL = process.env.REACT_APP_SERVER_URL

function App() {

    const [loggedIn, setLoggedIn] = useState(false)

    const setLoggedInValue = (value) =>{
        setLoggedIn(value)
    }

    useEffect(() => {
        fetchDataWithCredentials(baseURL+"checklogin").then(response => {
            setLoggedInValue(response)})
    }, [])

    return (
        <loggedInContext.Provider value={ {loggedIn , setLoggedInValue }}>
            <Routes>
                <Route path={pathsStruct.MainPage} element={<Layout/>}>
                    <Route index element={<Products/>}/>
                    <Route path={pathsStruct.ProductItem} element={<Product/>}/>
                    <Route path={pathsStruct.BasketPage} element={<Basket/>}/>
                    <Route path={pathsStruct.BasketItem} element={<BasketItem/>}/>
                    <Route path={pathsStruct.Payments} element={<Payments/>}/>
                    <Route path={pathsStruct.OrdersPage} element={<Orders/>}/>
                    <Route path={pathsStruct.OrdersItem} element={<OrderItem/>}/>
                    <Route path={pathsStruct.CategoryPage} element={<Category />}/>
                    <Route path={pathsStruct.LoginPage} element={<LoginComponent/>}/>
                </Route>
                <Route path="*" element={<NoPage errorMessage={"404 no Page Found"}/>}/>
            </Routes>
        </loggedInContext.Provider>
    );
}

export default App;
