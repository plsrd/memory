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
          width: '200px'
        }}
        alt='buttholes'
       />
    </div>
  )
}

export default Card