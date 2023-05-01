import React from "react";
import styles from './CardProduct.module.css'
import { Slider } from "../Slider/Slider";
import cn from "classnames";
import { formatMoney } from "../../utils/formatMoney";

import one from './1.jpg'
import two from './2.jpg'
import three from './3.jpg'
import four from './4.jpg'
import { Icon } from "../Icons/Icon";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import { MainPages } from "../../Pages/MainPages/MainPages";

export const CardProduct = ({favorites,orders,addToFavoritesList,removeToFavoritesList, id = '3645', onClick, title = 'Penis', city = 'Екатеринбург', price = '', date }) => {
    const [isFavorite, setIsFavorite] = useState(false)
    
    console.log(favorites)
    return (
        <div className={styles.wrapper}  >
            <Link to={`/product-info/${id}`} className={styles.link}>
                <Slider>
                    <div className={cn(styles.item, styles.item1)}><img className={styles.image} src={one} /></div>
                    <div className={cn(styles.item, styles.item2)}><img className={styles.image} src={two} /></div>
                    <div className={cn(styles.item, styles.item3)}><img className={styles.image} src={three} /></div>
                </Slider>
            </Link>
            <div className={styles.discription}>
                <div className={styles.blockNamed}>
                    <Link to={`/product-info/${id}`} className={styles.link}>
                        <span className={styles.nameProduct}>{title || 'Клей пва, оптом'} </span>
                    </Link>
                    {!favorites ?  <i  id = {id} class="bi bi-heart" style={{fontSize: '21px', color: '#009CF0'}} onClick={() => {addToFavoritesList({id,title,price});}}></i>: 
                    <i id = {id} class="bi bi-heart-fill" style={{fontSize: '21px', color: 'red'}} onClick={() => {removeToFavoritesList(id); }}></i>}
                </div>
                <span className={styles.price}>{formatMoney(5000) || formatMoney(price)}</span>
                <span className={styles.located}>{city || 'Екатеринбург'} </span>
                <span className={styles.datePublication}>{date || '26 марта 11:57'} </span>
            </div>

        </div>


    )
}