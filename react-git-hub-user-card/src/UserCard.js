import React from 'react'

const UserCard = (props) => {
    console.log(props)
    return (
        <div>
            <h2>Login Name (userName)</h2>
            <h2>{props.info}</h2>
        </div>
        
    )
}

export default UserCard;