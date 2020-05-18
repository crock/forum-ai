import React, { useState } from 'react'

const Accordian = ({title, children}) => {
    const [open, setOpen] = useState(false)

    return (
        <div className="accordian"
            style={{
                width: '100%',
                height: 'auto',
            }}
        >
            <div className="accordian--header" style={{
                width: '100%',
                height: 50,
                backgroundColor: '#f6f8fa',
                padding: 10,
                marginTop: 25,
                marginBottom: 25,
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
            }}>
                <h3>{title}</h3>
                <button className="accordian--button" title="Expand section" onClick={() => setOpen(!open)}>
                <svg style={{ transform: open ? `scaleY(-1)` : null }} enableBackground="new 0 0 24 24" version="1.0" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><polyline fill="none" points="21,8.5 12,17.5 3,8.5 " stroke="#e5e6eb" strokeMiterlimit="10" strokeWidth="2" /></svg>
                </button>
            </div>
            <div className="accordian--content" style={{
                display: open ? 'block' : 'none',
                height: open ? 'auto' : 0,
                transition: 'height 1s ease-in-out',
                border: '1px solid #e5e6eb',
                width: '100%',
                padding: 10,
            }}>
                {children}
            </div>
        </div>
    )
}

export default Accordian