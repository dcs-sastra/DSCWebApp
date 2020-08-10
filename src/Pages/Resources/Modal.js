import React from 'react';
import './Modal.css';

export default function Modal({children, closeModal, className}) {
    return (
        <div className="generic-modal-wrapper">
            <div className="generic-modal-bg" onClick = {closeModal} />
            <div className="generic-modal-body-wrapper">
                <div className={`generic-modal-body ${className ? className : ''}`}>
                    {children}
                </div>
            </div>
        </div>
    )
}



