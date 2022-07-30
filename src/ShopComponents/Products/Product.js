import {useParams} from "react-router-dom";
import React, {useContext, useState} from "react";
import {fetchData} from "../../Utils/fetchData";

const baseURL = process.env.REACT_APP_SERVER_URL

const Product = () => {
    const { id } = useParams()

    const [product, setProduct] = React.useState(null);

    React.useEffect(() => {
        fetchData(baseURL + "products/" + id).then((response) => {
            setProduct(response)
        })
    }, []);

    if (!product) return null

    return(
        <div className={"specificProduct"}>
            <h1>Specific Product Page</h1>
            <p>My name is: {product.name}</p>
            <p>My description is: {product.description}</p>
            <p>My price is: {product.price}</p>
            <p>My category reference is: {product.categoryReference}</p>
        </div>
    )
}

export default Product