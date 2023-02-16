import { useState } from "react";
import { useDispatch } from "react-redux";
import ChangeQuantity from "../cart/changeQuantity";
import { addItemToCart } from "../../redux/cartSlice";

const Dish = ({dish}) => {
    const [quantity, setQuantity] = useState(1);
    const dispatch = useDispatch();

    return (
        <div className="column">
            <img className="dish-img" src={`./${dish.img}.jpg`} alt="food"/>
            <h2>{dish.name}</h2>
            <p>$ {dish.price}</p>
            <ChangeQuantity quantity={quantity} setQuantity={setQuantity}/>
            <button className="btn-add" onClick={() => {dispatch(addItemToCart({dish, quantity}));
            }}>Add to cart</button>
        </div>
    )
}

export default Dish;