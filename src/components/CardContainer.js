import React, {  useState, useEffect  } from 'react'
import Card from './Card'


const CardContainer =  () => {
  const [score, setScore] = useState(0)
  const [selectedCards, setSelectedCards] = useState([])
  let allCards = ['one', 'two', 'three', 'four', 'five', 'six']

  const handleScore = (id) => {
    if(!selectedCards.includes(id)) {
      setScore(score + 1)
      setSelectedCards([...selectedCards, id])
    } else {
      setScore(0)
      setSelectedCards([])
    }
    shuffle()
  }

  const shuffle = () => {
    for (let i = allCards.length - 1; i >= 0; i--) {
      const placeholder = allCards[i]
      const index = Math.round(Math.random() * (allCards.length - (allCards.length  - i)))
      allCards[i] = allCards[index]
      allCards[index] = placeholder
    }
    console.log(allCards)
  }

  const createCardComponents = () => {
    return (
      allCards.map(item => 
        <Card 
          key={item}
          handleScore={handleScore}
          id={item}
        />
      )
    )
  }

  return (
    <div 
        style= {{
          display: 'flex',
          flexFlow: 'row wrap'
        }}>
        {createCardComponents()}
        <h2>{score}</h2>
      </div> 
  )
}

export default CardContainer