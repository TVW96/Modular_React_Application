import React from 'react'

export const Button = ({ onClick }) => {
    return (
        <button
            style={{
                backgroundColor: 'white',
                color: 'black',
                padding: '1rem 2rem',
                margin: '1rem',
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer'
            }}
            onClick={onClick}
        >Click Me</button>
    )
}

function SharedComponents() {
    return (
        <div>
            ...shared components go here
        </div>
    )
}

export default SharedComponents;