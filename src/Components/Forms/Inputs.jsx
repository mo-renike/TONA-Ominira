import React from 'react';


export const Input = ({ type, name, placeholder, className, onChange, required }) => {
    return (
        <input type={type} name={name} placeholder={placeholder} required={required} className={className} onChange={onChange} />
    )
}


// dropdown component
export const Dropdown = ({ name, className, onChange, required, children }) => {
    return (
        <select className={className} name={name} onChange={onChange} required={required}>
            {children}
        </select>
    )
}

