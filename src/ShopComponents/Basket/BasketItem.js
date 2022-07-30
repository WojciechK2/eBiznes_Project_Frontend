import {useParams} from "react-router-dom";
import {useContext, useEffect, useState} from "react";
import {productsContext} from "../Contexts/productsContext";
import {basketContext} from "../Contexts/basketContext";

const BasketItem = ({id, updateParent}) => {

    const {basketItems, handleBasketEvent} = useContext(basketContext)
    const [quantity, setQuantity] = useState(null)
    const [name, setName] = useState(null)
    const [totalPrice, setTotalPrice] = useState(null)

    const removeFromBasket = () => {
        console.log('REMOVE_FROM_BASKET')
        handleBasketEvent('REMOVE_FROM_BASKET', id)
        setQuantity(basketItems.filter((d) => {
            if (d.payload.id === id) {
                setQuantity(d.quantity)
                setTotalPrice(calculateTotalPrice(d.payload.price))
                updateParent()
            }
        }))
    }

    const calculateTotalPrice = (price) => {
        return (price * quantity).toFixed(2);
    }

    useEffect(() => {
        basketItems.filter((d) => {
            if (d.payload.id === id) {
                setQuantity(d.quantity)
                setName(d.payload.name)
                setTotalPrice(calculateTotalPrice(d.payload.price))
            }
        })
    }, [quantity, name])

    return (
        <div className={"BasketItemComponent"}>
            <div className={"Basketitems"}>
                <p>{name}</p>
                <p>Quantity: {quantity}</p>
                <p>Total price: {totalPrice}</p>
            </div>
            <button onClick={removeFromBasket}>Remove one</button>
        </div>
    )
}

export default BasketItem