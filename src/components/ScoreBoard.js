import React, {useState, useEffect} from 'react'

const ScoreBoard = ({score}) => {
  const [ highestScore, setHighestScore ] = useState(0)

  useEffect(() => {
    if (score > highestScore) setHighestScore(score)
  }, [score])

  return (
    <div className='scoreboard'>
      <h2>Current Score: {score}</h2>
      <h2>Highest Score:{highestScore}</h2>
    </div>
  )
}

export default ScoreBoard