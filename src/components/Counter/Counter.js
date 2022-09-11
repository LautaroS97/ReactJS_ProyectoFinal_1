import { useState } from "react";

let stock = 5

const Contador = () => {
    
    const [counter, setCounter] = useState (0)

    const handleSumar = () => {
        if(counter+1<=stock && stock>=0) {
            setCounter(counter+1);
        }
    }

    const handleRestar = () => {
        if(counter>0) {
            setCounter(counter-1)
        }
    }

    return(
        <div>
            <button className="contador" onClick={handleRestar}>-</button>
            <span>{counter}</span>
            <button className="contador" onClick={handleSumar}>+</button>
        </div>
    )
    
}

export default Contador;