const CheckoutButton = () => {

    let loggedIn = true

    if(loggedIn) {
        return (
            <div className={"CheckoutButtonHandler"}>
                <button className={"checkoutButton"}>Pay For the Goods</button>
            </div>
        )
    } else {
        return (
            <div className={"CheckoutButtonHandler"}>
                <p>Not so fast!</p>
                <p>Please login first</p>
                <button className={"LoginButton"}>Login</button>
            </div>
        )
    }
}

export default CheckoutButton