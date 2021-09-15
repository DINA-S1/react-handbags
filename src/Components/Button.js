import React from 'react'

function Button ({children, disabled}){
    return(
       <button disabled={disabled}>{children}</button>
    )
}
export default Button