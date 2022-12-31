import React from 'react';
import './ToastAlert.scss'

const ToastAlert = ({ title }) => {
    return (
        <div className='toast'>{title}</div>
    )
}

export default ToastAlert