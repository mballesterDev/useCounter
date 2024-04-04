import { useState } from "react";
export const useCounter = (value = 10) => { //sino recibe ningun argumento el contador empezará en 10 por defecto

    const [counter, setCounter] = useState(value);
    
    const increment = () =>{
        setCounter(counter + 1);
    }

    const discrement = () => {
        if (counter === 0){
            alert('no puede ser menor que 0 !')
            return
        }
        
      setCounter(counter - 1)
    }

    const reset = () =>{
        setCounter(value)
    }
    

    return{
        counter,
        increment,
        discrement,
        reset
    }
    /*Uso {} xq devuelve un objeto counter:value pero no se escribe :value porque es redundante */
}
