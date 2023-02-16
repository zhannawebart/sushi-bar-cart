//import { type } from "@testing-library/user-event/dist/type";

const ChangeQuantity = ({quantity, setQuantity}) => {
    
    const addQuantity = () => {
        const newQuantity = quantity + 1;
        setQuantity(newQuantity)
    }

    const removeQuantity = () => {
        if (quantity <= 1) return;
        const newQuantity = quantity - 1;
        setQuantity(newQuantity)
    }

    return (
        <div>
            <button onClick={addQuantity}>+</button>
            <span><strong>{quantity}</strong></span>
            <button onClick={removeQuantity}>-</button>
        </div>
    )
}

export default ChangeQuantity;