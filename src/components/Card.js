import React from 'react'
import cardImages from '../images'

const Card = ({ handleScore, id}) => {

  const handleClick = () => {
    handleScore(id) 
  }

  return (
    <div onClick={handleClick}>
      <img 
        src={cardImages[id]}
        style={{
          width: '200px',
          boxShadow: '7px 7px 10px 5px rgba(255, 255, 255, 0.55), -7px -7px 10px 5px rgba(255, 255, 255, 0.75)',
          borderRadius: '.5em',
          margin: '1em'
        }}
        alt='buttholes'
       />
    </div>
  )
}

export default Card