import { useEffect, useState } from "react";

  export default function UseDebounce(value , delay) {
    const [debounceValue , setDebounceValue] = useState('');

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setDebounceValue(value)
        },1000);
        
        return() => {
            clearTimeout(timeoutId);
        }
    },[value , delay]);

    return debounceValue;
  }