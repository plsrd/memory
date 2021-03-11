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
        className='card'
        style={{
          
        }}
        alt={id}
       />
    </div>
  )
}

export default Card