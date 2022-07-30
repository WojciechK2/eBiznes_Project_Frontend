import React, {useContext} from 'react'
import ProductCardView from "./ProductCardView";
import {categoryContext} from "../Contexts/categoryContext"
import {productsContext} from "../Contexts/productsContext"

const Products = () => {

    const categories = useContext(categoryContext)
    const products = useContext(productsContext)

    return (
        <div className={"productsComponent categoryComponent"}>
            <h1>List of all the products</h1>
                <ul>
                    {products.map(d => (
                        <li key={d.id}>
                            <ProductCardView key={d.id} productID={d.id}/>
                        </li>
                    ))}
                </ul>
        </div>
    )
}

export default Products;