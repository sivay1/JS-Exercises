import { Button } from "@mui/material";
import { useState } from "react";

export default function Cart() {
    const [cart, setCart] = useState([]);
    const [item, setItem] = useState("");

    const addToEnd = () => {
        // if (item.trim() === '') return;

        setCart((prevCart) => [...prevCart, item]); // push
        setItem(''); // clear input
    };
    const removeFromEnd = () => {
        setCart((prevCart) => prevCart.slice(0, -1)); // pop
    };
    const addToFront = () => {
        if (item.trim() === '') return;

        setCart((prevCart) => [item, ...prevCart]); // unshift
        setItem('');
    };
    const removeFromFront = () => {
        setCart((prevCart) => prevCart.slice(1)); // shift
        };
        
    const viewCart = () => {
        // setCart(cart);
        <ul>
        {cart.map((val, index) => (
            <li key={index}>{val}</li>
        ))}
        </ul>

    }

    return(
        <>
        <input type="text" value={item} onChange={(e) => setItem(e.target.value)} />
        <Button onClick={() => addToEnd()}>Add to End</Button>
        <Button onClick={() => removeFromEnd()}>Remove from End</Button>
        <Button onClick={() => addToFront()}>Add to Front</Button>
        <Button onClick={() => removeFromFront()}>Remove from Front</Button>
        <Button onClick={() => viewCart()}>View Cart</Button>
        <ul>
            {cart.map((val, index) => (
            <li key={index}>{val}</li>
            ))}
        </ul>
        </>
    );

}