import {useParams} from "react-router-dom";
import React, {useState} from "react";
import axios from "axios";
import Layout from "../GlobalLayout/Layout";

const baseURL = process.env.REACT_APP_SERVER_URL

const Product = () => {
    const { id } = useParams()
    const [product, setProduct] = useState(null)

    React.useEffect(()=>{
        axios.get(baseURL + "/products/" + id ).then((response) => {
            setProduct(response.data)
        });
    }, [id]);

    if(!product) return null

    return(
        <div className={"specificProduct"}>
            <h1>Specific Product Page</h1>
            <p>My id is: {product.id}</p>
            <p>My name is: {product.name}</p>
            <p>My description is: {product.description}</p>
            <p>My price is: {product.price}</p>
            <p>My category reference is: {product.categoryReference}</p>
        </div>
    )
}

export default Product