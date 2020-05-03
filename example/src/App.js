import React, { useState } from 'react'

import NavBar from 'nav-bar'
import 'nav-bar/dist/index.css'

const App = () => {
  const [triggerClose, setTriggerClose] = useState(false)

  const onButtonClick = () => {
    setTriggerClose(true)
    setTimeout(() => {
      setTriggerClose(false)
    }, 1000)
  }
  return (
    <NavBar mobileBreakPoint={500} triggerHamburgerClose={triggerClose}>
      <ul>
        <li>
          <a href='https://www.google.com'>Click Me</a>
        </li>
        <li>
          <button onClick={onButtonClick}>About</button>
        </li>
        <li>Contact Us</li>
      </ul>
    </NavBar>
  )
}

export default App
