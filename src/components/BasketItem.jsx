export function BasketItem(props) {
    const { id, name, price, quantity, removeFromBasket = Function.prototype, upItemInBasket = Function.prototype,downItemInBasket= Function.prototype } = props;
    return (
        <li className="collection-item">
            <div>{name} x{quantity} = {price * quantity} 
                <button className="btn grey darken-4" onClick={()=>downItemInBasket(id)}>-</button>
                <button className="btn grey darken-4" onClick={() => upItemInBasket(id)}>+</button>
                <span href="#!" className="secondary-content">
                    <i className="material-icons delete_items_basket" onClick={() => removeFromBasket(id)}>close</i>
                </span>
            </div>
        </li>
    )
}