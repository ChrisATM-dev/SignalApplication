import{ useState } from 'react'

export const useCounter = (i) => {
    const [counter, setCounter] = useState(1);

    const increment = () => {
        if(counter<i){
            setCounter(counter + 1);
        }
    };

    const decrement = () => {
        if(counter>1){
            setCounter(counter - 1);
        }
    };
    return{
        counter,
        increment,
        decrement
    }
}
