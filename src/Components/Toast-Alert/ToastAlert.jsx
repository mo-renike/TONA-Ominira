import React from 'react';
import './ToastAlert.scss'

const ToastAlert = ({ message }) => {
    return (
        <div className='toast'>{message}</div>
    )
}

export default ToastAlert