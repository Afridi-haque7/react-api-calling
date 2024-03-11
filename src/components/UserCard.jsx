import React from 'react'

const UserCard = (props) => {
  return (
    <div className="usercard-container">
      <img src={props.data.picture.large} alt="" className="user-img" />
      <h3>{`${props.data.name.title} ${props.data.name.first} ${props.data.name.last}, ${props.data.gender}`}</h3>
      <p>{props.data.cell}</p>
      <p>{`${props.data.location.city}, ${props.data.location.country}`}</p>
    </div>
  )
}

export default UserCard;
