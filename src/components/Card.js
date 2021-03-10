import React, { useState } from 'react'

const Card = (props) => {
  const [ selected, setSelected ] = useState(false)
  const { setScore, score, info } = props

  const handleClick = () => {
    if (selected === false){
      setSelected(true)
      setScore(score + 1)
    } 
  }

  return (
    <div onClick={handleClick}>
      <h2>{info.name}</h2>
    </div>
  )
}

export default Card