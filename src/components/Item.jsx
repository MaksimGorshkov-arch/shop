export function Item(props) {
   const {setItemCart = Function.prototype, id,name,price} = props;
    return (
        <div className="card">
            <div className="card-image">
                <img src={props.image} alt="" />
                <span className="card-title title2">{props.name}</span>

            </div>
            <div className="card-content">
                <p>{props.description}</p>
            </div>
            <div className="card-action">
                <button className="btn grey darken-4 left" onClick={() => setItemCart({id,name,price})}>Купить</button>
                <span className="right">{props.price}</span>
            </div>
        </div>
    )
}


