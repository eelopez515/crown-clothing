import React from 'react'
import './Button.sass'

function Button({ children, ...props }) {
    return (
        <button className='button' {...props} >
            {children}
        </button>
    )
}

export default Button
