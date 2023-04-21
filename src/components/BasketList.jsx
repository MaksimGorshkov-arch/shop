import { BasketItem } from "./BasketItem"
export function BasketList(props) {
  const { order = [],
    handleBasketShow = Function.prototype,
    removeFromBasket = Function.prototype,
    upItemInBasket = Function.prototype,
    downItemInBasket = Function.prototype } = props
    
  const totalPrice = order.reduce((sum, elem) => {
    return sum + elem.price * elem.quantity
  }, 0);
  return (
    <ul className="collection basket-list">
      <li className="collection-item grey darken-4 active "><div>Корзина<a href="#!" className="secondary-content"><i className="material-icons" onClick={handleBasketShow}>close</i></a></div></li>
      
      {
       
        order.length ? order.map(elem => (<BasketItem key={elem.id} removeFromBasket={removeFromBasket} upItemInBasket={upItemInBasket} downItemInBasket={downItemInBasket} {...elem} />)) : <li className="collection-item active">Корзина пуста</li> //...elem все значения ключей выбранного объекта
      }
      <li className="collection-item grey darken-4 active "><div>Общая стоимость: {totalPrice}</div></li>
    </ul>
  )
}