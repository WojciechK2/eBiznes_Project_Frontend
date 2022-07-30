import {useContext, useEffect, useState} from "react";
import {basketContext} from "../Contexts/basketContext";
import BasketItem from "./BasketItem";


const Basket = () => {

    const {basketItems} = useContext(basketContext)
    const [totalPrice, setTotalPrice] = useState(null)

    useEffect(() => {
        let price = 0;
        basketItems.forEach((d) => {
            price += (d.payload.price * d.quantity)
        })
        setTotalPrice(price.toFixed(2))
    }, [totalPrice, basketItems])

    function updateTotalPrice(){
        let price = 0;
        basketItems.forEach((d) => {
            price += (d.payload.price * d.quantity)
        })
        setTotalPrice(price.toFixed(2))
    }

    if (basketItems.length === 0) {
        return (
            <div className={"basketComponent"}>
                <h1>Basket is empty</h1>
            </div>
        )
    }

    return (
        <div className="basketComponent">
            <div className={"basketItemsList"}>
                <ul>
                    {basketItems.map((d, index) => (
                        <li key={index}>
                            <BasketItem id={d.payload.id} updateParent={updateTotalPrice}/>
                        </li>
                    ))
                    }
                </ul>
            </div>
            <div className={"totalPrice"}>
                <p>Total price: {totalPrice}</p>
            </div>
        </div>

    )
}

export default Basket;