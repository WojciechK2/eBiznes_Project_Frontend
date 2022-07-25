import {useParams} from "react-router-dom";

const OrderItem = () => {
    const { id } = useParams()
    return(
        <div className={"orderComponent"}>
            <h1>Specific Order Component</h1>
            <p>My id is: {id}</p>
        </div>
    )
}

export default OrderItem