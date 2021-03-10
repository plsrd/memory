import React, { useState } from 'react'
import Card from './Card'


const CardContainer =  () => {
  const [score, setScore] = useState(0)
  const [gameLost, setGameLost] = useState(false)

  const handleScore = (lost) => {
    if (!lost) {
      setScore(score + 1)
      //shuffle()
    } else {
      setScore(0)
    }
  }

  let allCards = ['one', 'two', 'three', 'four', 'five', 'six']
  return (
    <div 
        style= {{
          display: 'flex',
          flexFlow: 'row wrap'
        }}>
        {allCards.map(item => 
          <Card 
            key={item}
            handleScore={handleScore}
            imgSrc={item}
          />
        )}
      </div> 
  )
}

export default CardContainer