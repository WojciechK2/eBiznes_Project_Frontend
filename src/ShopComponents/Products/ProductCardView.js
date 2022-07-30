import React, {useContext, useState} from "react";
import {Link} from "react-router-dom";
import pathsStruct from "../../Utils/PathsStruct";
import ProductCardViewCategoryDisplay from "./ProductCardViewCategoryDisplay";
import NoPage from "../NoPage";
import {categoryContext} from "../Contexts/categoryContext";
import {productsContext} from "../Contexts/productsContext";
import {basketContext} from "../Contexts/basketContext";

const ProductCardView = ({productID}) => {

    const products = useContext(productsContext)
    const categories = useContext(categoryContext)
    const {handleBasketEvent} = useContext(basketContext)

    const product = products.filter(
        d => {
            return d.id === productID
        }
    )

    const category = categories.filter(
        d => {
            return d.id === product[0].categoryReference
        }
    )

    const addToBasket = () => {
        handleBasketEvent('ADD_TO_BASKET', product[0])
    }

    if (!categories) return (<NoPage errorMessage={"Networking issue, categories"}/>)
    if (!products) return (<NoPage errorMessage={"Networking issue, products"}/>)

    //add links inside
    return (
        <div className={"productCardView"}>
            <ProductCardViewCategoryDisplay category={category}/>
            <div className={"productCardView_middle"}>
                <Link to={`${pathsStruct.ProductsPage}/${productID}`} className={"productCardViewProductLink"}>
                    <p className={"nameProductCardView"}>{product[0].name}</p>
                </Link>
                <p className={"priceProductCardView"}>Price: {product[0].price}</p>
            </div>
            <div className={"productCardView_bottom"}>
                <p className={"descriptionProductCardView"}>{product[0].description}</p>
            </div>
                <div className={"addToBasketButton"}>
                    <button onClick={addToBasket}>Add to cart</button>
                </div>
        </div>
    )
}

export default ProductCardView