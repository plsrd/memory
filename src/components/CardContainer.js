import React, {  useState, useEffect } from 'react'
import Card from './Card'
import ScoreBoard from './ScoreBoard'
import InfoBar from './InfoBar'


const CardContainer =  () => {
  const [score, setScore] = useState(0)
  const [selectedCards, setSelectedCards] = useState([])
  const [allCards, setAllCards]  = useState([
    'one', 
    'two', 
    'three', 
    'four', 
    'five', 
    'six', 
    'seven', 
    'eight', 
    'nine', 
    'ten', 
    'eleven', 
    'twelve'
  ])
  const [playMode, setPlayMode] = useState ('play')

  const handleScore = (id) => {
    if(!selectedCards.includes(id)) {
      setScore(score + 1)
      if (score === allCards.length) {
        setPlayMode('won')
        resetGame()
      } else {
        setSelectedCards([...selectedCards, id])
      }
    } else {
      setPlayMode('lost')
      resetGame()
    }
    shuffle()
  }

  const resetGame = () => {
    setScore(0)
    setSelectedCards([])
  }

  const shuffle = () => {
    let updatedCards = allCards.slice()
    for (let i = updatedCards.length - 1; i >= 0; i--) {
      const placeholder = updatedCards[i]
      const switchIndex = Math.round(Math.random() * (updatedCards.length - (updatedCards.length  - i)))
      updatedCards[i] = updatedCards[switchIndex]
      updatedCards[switchIndex] = placeholder
    }
    setAllCards(updatedCards)
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

  const selectComponents = () => {
    if (playMode === 'play') {
      return (
        <div className='card-container'>
          {createCardComponents()}
        </div>
      ) 
    } else if (playMode === 'won') {
      return (
        <div>
          <h2 className='notification'>You have won.</h2>
        </div>
      )
    } else if (playMode === 'lost'){
      return (
        <div>
          <h2 className='notification'>You have lost.</h2>
        </div>
      )
    }
  }

  useEffect(() => {
    if (playMode === 'won' || playMode === 'lost') {
      setTimeout(() => setPlayMode('play'), 1500)
    }
  }, [playMode])

  return (
    <div className='game-container'>
      <div className='header-container'>
        <h1 className='header'>BlotMemory</h1>
        <ScoreBoard score={score}/>
      </div>
      <InfoBar />
       {selectComponents()}
    </div>
  )
}

export default CardContainer