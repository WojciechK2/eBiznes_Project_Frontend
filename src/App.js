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
import LoginComponent from "./ShopComponents/LoginComponent";
import pathsStruct from "./Utils/PathsStruct";
import Layout from "./ShopComponents/GlobalLayout/Layout";
import React from "react";
import Category from "./ShopComponents/Categories/Category";

function App() {

    return (
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
            </Route>
            <Route path={pathsStruct.LoginPage} element={<LoginComponent/>}/>
            <Route path="*" element={<NoPage errorMessage={"404 no Page Found"}/>}/>
        </Routes>
    );
}

export default App;
