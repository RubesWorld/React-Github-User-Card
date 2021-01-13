import React from 'react'
import FollowerCard from './FollowerCard'

const UserCard = (props) => {
    console.log("props",props)
    return (
        <>
        <div className="main-card">
              <div className="top-half">
                <h1>GitHub UserCard Component!</h1>
                <div className="img-container">
                  <img  src={props.info["avatar.url"]} alt="github image" width="200" height="200"/>
                </div>
                <h2>{props.info.login}</h2>
                <h2>{props.info.location}</h2>
                <p>{props.info.bio}</p>
                </div>
        <FollowerCard />
        </div>
        </>
    )
}

export default UserCard;