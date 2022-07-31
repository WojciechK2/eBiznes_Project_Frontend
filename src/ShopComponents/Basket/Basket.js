import React, {useContext, useState} from "react";
import {basketContext} from "../Contexts/basketContext";
import BasketItem from "./BasketItem";
import CheckoutButton from "./CheckoutButton";


const Basket = () => {

    const {basketItems} = useContext(basketContext)
    const [totalPrice, setTotalPrice] = useState(null)


    React.useEffect(() => {
        calculateTotalPrice()
    }, [basketItems,calculateTotalPrice])

    function calculateTotalPrice(){
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
                            <BasketItem item={d} updateParent={calculateTotalPrice}/>
                        </li>
                    ))
                    }
                </ul>
            </div>
            <div className={"totalPrice"}>
                <p>Total price: {totalPrice}</p>
            </div>
            <CheckoutButton/>
        </div>
    )
}


export default Basket;