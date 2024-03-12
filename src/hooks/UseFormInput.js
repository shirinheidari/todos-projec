import { useState } from "react";

export default function UseFormInput(initialValue){
    const [value , setValue] = useState(initialValue);

    const onChangeHandler = (event) => {
        setValue(event.target.value);
    }

    return {
        value,
        onChange : onChangeHandler
    }

}