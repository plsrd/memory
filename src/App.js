import React, { useState } from 'react'
import Card from './components/Card'

const App = () => {
  const [score, setScore] = useState(0)

  const allCards = [
    {
      id: 1,
      name: 1,
    },
    {
      id: 2,
      name: 2,
    },
  ]

  const cardComponents = allCards.map(item => 
    <Card 
      key={item.id}
      score={score}
      setScore={setScore}
      info={item}
    />
  )

  return (
    <div>
      <div>
        <h2>Score</h2>
        <h2>{score}</h2>
      </div>  
      <div>
        {cardComponents}
      </div>  
    </div>
  );
}

export default App;
