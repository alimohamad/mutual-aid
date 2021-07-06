import React from 'react'

const Header = ({ org }) => {
    
    console.log(org.displayName)
    return (
        <div>
            <h1>{org.displayName}</h1>
            <h2>{org.body}</h2>
        </div>
    )
}

export default Header