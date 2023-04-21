import { useEffect, useState } from "react"
import { API_KEY, API_URL } from "../config"
import { Items } from "./Items"
import { Preloader } from "./Preloader"
import { Cart } from "./Cart"
import { BasketList } from "./BasketList"
import { Alert } from "./Alert"
export function Shop() {
    const [items, setItems] = useState([])
    const [loading, setLoading] = useState(true)
    const [orders, setOrders] = useState([])
    const [isBasketShow, setIsBasketShow] = useState(false)//видим корзину или нет
    const [alertName,setAlertName] = useState('')

    const addToBasket = (item) =>{//получили сюда объект с id и ценой
        const itemIndex = orders.findIndex((orderItem)=>orderItem.id === item.id) //првоеряем был ли ранее добавлен этот товар
        if(itemIndex < 0){ //если не было добавлена, то добавляем с количеством 1
         const newItem = { //
             ...item, //унаследует все ключи 
             quantity: 1, //добавим одно поле 
            };
             setOrders([...orders, newItem])//возвращает все элементы которые уже имеются в order и добавляет в конце newItem объект
        }
        else{ //если уже был добавлен данный товар 
         const newOrder = orders.map((orderItem, index)=>{//ищем его позицию 
             if(index === itemIndex){ 
                 return {
                     ...orderItem,
                     quantity: orderItem.quantity + 1, //увеличиваем количество
                 }
             }
             else{
                 return orderItem; 
             }
         })
         setOrders(newOrder)//меняем 
        }
        setAlertName(item.name)
     };
    const downItemInBasket = (itemId) =>{
        const newOrder = orders.map((orderItem)=>{//ищем его позицию 
            if(orderItem.id === itemId){
                const newQuantity =orderItem.quantity - 1 
                return {
                    ...orderItem,
                    quantity: newQuantity >=1 ? newQuantity: 1, //увеличиваем количество
                }
            }
            else{
                return orderItem
            }
            
        });
        setOrders(newOrder)
    }
    const upItemInBasket = (itemId) =>{
        const newOrder = orders.map((orderItem)=>{//ищем его позицию 
            if(orderItem.id === itemId){
                const newQuantity =orderItem.quantity + 1 
                return {
                    ...orderItem,
                    quantity: newQuantity, //увеличиваем количество
                }
            }
            else{
                return orderItem
            }
            
        });
        setOrders(newOrder)
    }
    const removeFromBasket =(itemId) =>{
        const newOrder = orders.filter(el => el.id !== itemId)
        setOrders(newOrder)
    } 
   
    const handleBasketShow = ()=>{
        setIsBasketShow(!isBasketShow) //инвертируем состояние корзины
    }
    const closeAlert = () =>{
        setAlertName('');
    }
    useEffect(() => {
        fetch(API_URL, {
            headers: {
                Authorization: API_KEY
            }
        })
            .then(response => response.json())
            .then(data => {
                if (data.featured) {
                    setItems(data.featured);
                    setLoading(false);
                } else {
                    (alert('Ничего не найдено!'));
                }
            })

    }, [])


    return <main className='container content'>
        <Cart  quantity = {orders.length} handleBasketShow={handleBasketShow}/>
        {
            loading ? (<Preloader />) : (<Items setItemCart = {addToBasket} items={items} />)
        }
        {
            isBasketShow && <BasketList order={orders} removeFromBasket={removeFromBasket} handleBasketShow={handleBasketShow} upItemInBasket={upItemInBasket} downItemInBasket = {downItemInBasket}/>
        }
        {
            alertName && <Alert name ={alertName} closeAlert = {closeAlert} />
        }
    </main>
}