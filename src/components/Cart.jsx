export function Cart(props){
    const {handleBasketShow=Function.prototype} = props
    return(
        <div className="cart grey darken-4 white-text " onClick={handleBasketShow}>
            <i className="material-icons">shopping_cart</i>
            {props.quantity ? <span className="cart-quantity">{props.quantity}</span> : null}
        </div>
    )
}