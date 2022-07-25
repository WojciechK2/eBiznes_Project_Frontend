import React from 'react'
import ProductSimplified from "./ProductSimplified";
import LayoutHeader from "../GlobalLayout/LayoutHeader";

const baseURL = process.env.REACT_APP_SERVER_URL

const Products = () => {

    const [products, setProducts] = React.useState(null);

    const fetchData = () => {
        fetch(baseURL + "products")
            .then((response) => response.json())
            .then((response) => {
                setProducts(response)
            })
    };

    React.useEffect(() => {
        fetchData()
    }, []);

    if (!products) return null

    return (
        <article>
            <div className={"productsComponent"}>
                <h1>List of all the products</h1>
                <div className={"productsDisplay"}>
                    <ul>
                        {products.map(d => (<ProductSimplified key={d.id} id={d.id} name={d.name}/>))}
                    </ul>
                </div>
            </div>
        </article>
    )
}

export default Products;