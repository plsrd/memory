import React, { useState} from 'react'
import { FaInfoCircle } from "react-icons/fa"

const InfoBar = () => {
  const [ hover, setHover ] = useState(false)

  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className='infobar'
    >
      {hover ? <p>to win: click each image without clicking on one you've already selected</p> : <FaInfoCircle />}
    </div>
  )
}

export default InfoBar