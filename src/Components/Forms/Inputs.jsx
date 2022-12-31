import React from 'react';


export const Input = ({ type, placeholder, className, onChange, required }) => {
    return (
        <input type={type} placeholder={placeholder} required={required} className={className} onChange={onChange} />
    )
}


// dropdown component
export const Dropdown = ({ className, onChange, required, children }) => {
    return (
        <select className={className} onChange={onChange} required={required}>
            {children}
        </select>
    )
}

