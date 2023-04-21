import React from "react";
import { Item } from "./Item";
export function Items(props) {
    let itms = props.items
    if (!itms.length) {
        return <h3>Nothing here!</h3>
    }
    return <div className="items">
        {
            props.items.map((item) => (
                <Item key={item.id} setItemCart = {props.setItemCart} id ={item.id} name={item.name} image={item.image} description={item.description} price={item.price} />
            ))
        }
    </div>
}