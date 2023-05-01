import React, {useState, useEffect } from "react";
import styles from "./MainPages.module.css";
import cn from "classnames";
import { Input } from "../../component/Input/Input";
import { Icon } from "../../component/Icons/Icon";
import { CardProduct } from "../../component/CardProduct/CardProduct";
import { Categories } from "../../component/Categories/Categories";
import { Layout } from "../../component/Layout/Layout";
import { useDispatch } from "react-redux";
import { setFavorites } from "../../store/favorites/favoritesSlice";
import { getFavorites } from "../../store/favorites/favoriteSelector";
import { useSelector } from "react-redux";

export const MainPages = ({ className }) => {
  const [showFavorites, setShowFavorites] = useState(false)
  const [orders, setOrders] = useState([]);
  const dispatch = useDispatch()
  const allFavorites = useSelector(getFavorites)
  console.log(allFavorites)
  const addToFavoritesList = (item) =>{//получили сюда объект с id и ценой
          console.log(item)

          dispatch(setFavorites(item.id))

   };
   const removeToFavoritesList = (itemId) =>{
      const newOrder = orders.filter(el => el.id !== itemId)
      setOrders(newOrder)
   }

  const showFavoriteModal = ()=>{
    setShowFavorites(!showFavorites)
}



  return (
    <Layout orders = {orders} showFavoriteModal = {showFavoriteModal} showFavorites={showFavorites} removeToFavoritesList = {removeToFavoritesList}>
      <div className={styles.wrapper} >
        <Categories />
        <div className={styles.title}>
          <h3 className={styles.textRecomendation}>Рекомендации для вас</h3>
        </div>
        <div className={styles.productArea}>
          <div className={styles.products}>
            <CardProduct favorites={allFavorites.includes('1')} id = '1' orders = {orders} addToFavoritesList = {addToFavoritesList} removeToFavoritesList={removeToFavoritesList}/>
            {<CardProduct id = '2'orders = {orders} addToFavoritesList = {addToFavoritesList} removeToFavoritesList={removeToFavoritesList}/>}
            {<CardProduct id = '3' orders = {orders} addToFavoritesList = {addToFavoritesList} removeToFavoritesList={removeToFavoritesList}/>}
            {<CardProduct id = '4' orders = {orders} addToFavoritesList = {addToFavoritesList} removeToFavoritesList={removeToFavoritesList}/>}
            {<CardProduct id = '5' orders = {orders} addToFavoritesList = {addToFavoritesList} removeToFavoritesList={removeToFavoritesList}/>}
            {<CardProduct orders = {orders} addToFavoritesList = {addToFavoritesList} removeToFavoritesList={removeToFavoritesList}/>}
            {<CardProduct orders = {orders} addToFavoritesList = {addToFavoritesList} removeToFavoritesList={removeToFavoritesList}/>}
            {<CardProduct orders = {orders} addToFavoritesList = {addToFavoritesList} removeToFavoritesList={removeToFavoritesList}/>}
            {<CardProduct orders = {orders} addToFavoritesList = {addToFavoritesList} removeToFavoritesList={removeToFavoritesList}/>}
            {<CardProduct orders = {orders} addToFavoritesList = {addToFavoritesList} removeToFavoritesList={removeToFavoritesList}/>}
            {/* {<CardProduct />} */}
            {/* {<CardProduct />} */}
            {/*<CardProduct />*/}
            {/*<CardProduct />*/}
            {/*<CardProduct />*/}
            {/*<CardProduct />*/}
            {/*<CardProduct />*/}
          </div>
          <div className={styles.infoArea}>
            <span>Ваши последнии покупки</span>
          </div>
        </div>
      </div>
    </Layout>
  );
};
