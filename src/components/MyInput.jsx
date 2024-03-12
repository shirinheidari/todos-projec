import { forwardRef } from "react";


const MyInput = forwardRef(({} , searchRef) =>{
    return(
        <input
            ref={searchRef}
            placeholder="Looking for something"
        />
    )
})

export default MyInput;