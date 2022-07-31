import React, {useContext, useState} from "react";
import {basketContext} from "../Contexts/basketContext";
import BasketItem from "../Basket/BasketItem";

const Payments = () => {

    const {basketItems} = useContext(basketContext)
    const [totalPrice, setTotalPrice] = useState(null)

    React.useEffect(() => {
        calculateTotalPrice()
    }, [basketItems, calculateTotalPrice])

    function calculateTotalPrice() {
        let price = 0;
        basketItems.forEach((d) => {
            price += (d.payload.price * d.quantity)
        })
        setTotalPrice(price.toFixed(2))
    }

    const initializePaymentTransaction = () =>{
        console.log("Time to pay");
    }

    return (
        <div className={"paymentsComponent"}>
            <h1>Payments Component</h1>
            <div className={"paymentsDisplay"}>
                <ul>
                {basketItems.map((d, index) => (
                    <li key={index}>
                        <p>{d.payload.name}</p>
                        <p>Quantity: {d.quantity}; Price: {(d.payload.price * d.quantity).toFixed(2)}</p>
                    </li>
                ))
                }
                </ul>
                <div className={"totalPrice"}>
                    <p>Total price: {totalPrice}</p>
                </div>
                <div className={"payButton"}>
                    <button onClick={initializePaymentTransaction}>Pay For The Goods</button>
                </div>
            </div>
        </div>
    )
}

export default Payments;