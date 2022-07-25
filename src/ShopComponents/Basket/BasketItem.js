import {useParams} from "react-router-dom";

const BasketItem = () => {
    const { id } = useParams()
    return(
        <div className={"BasketItemComponent"}>
            <h1>Basket Item Component</h1>
            <p>My id is {id}</p>
        </div>
    )
}

export default BasketItem