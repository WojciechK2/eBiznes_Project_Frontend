import {useContext} from "react";
import {basketContext} from "../Contexts/basketContext";

const BasketItem = ({item, updateParent}) => {

    const { handleBasketEvent } = useContext(basketContext)

    const removeFromBasket = () => {
        handleBasketEvent('REMOVE_FROM_BASKET', item)
        updateParent()
    }

    return (
        <div className={"BasketItemComponent"}>
            <div className={"Basketitems"}>
                <p>{item.payload.name}</p>
                <p>Quantity: {item.quantity}</p>
                <p>Total Price: {(item.payload.price * item.quantity).toFixed(2)}</p>
            </div>
            <button onClick={removeFromBasket}>Remove one</button>
        </div>
    )
}

export default BasketItem