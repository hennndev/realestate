import React from 'react'

const InputControl = ({children, value, id, title, handleChange}) => {
    return (
        <div className="inputControl">
            <label htmlFor={id}>{title}</label>
            <select 
                id={id}
                className={`select-input ${value !== 'default' && 'bg-yellow-200'}`}
                value={value}
                onChange={handleChange}>
                {children}
            </select>
        </div>

    )
}

export default InputControl
