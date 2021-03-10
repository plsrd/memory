import React, { useState } from 'react'
import cardImages from '../images'

const Card = ({ handleScore, imgSrc }) => {
  const [ selected, setSelected ] = useState(false)

  const handleClick = () => {
    
    handleScore(selected)  
  }

  return (
    <div onClick={handleClick}>
      <img 
        src={cardImages[imgSrc]}
        style={{
          width: '200px'
        }}
        alt='buttholes'
       />
    </div>
  )
}

export default Card