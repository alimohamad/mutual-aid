import React from 'react'

const TextField = ({ changeHandler, field, title, currentVal }) => {


    const textChangeHandler = (e) => {
        e.preventDefault()
        console.log(e.target.value)
        changeHandler(field, e.target.value)
    }
    console.log(currentVal)
    return (
        <div>
            <div>{title}</div>
            <input type="text" onChange={textChangeHandler} defaultValue={currentVal}  />
        </div>
    )
}

export default TextField