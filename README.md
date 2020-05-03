# nav-bar

> Responsive navigation wrapper around navigation items for a website

[![NPM](https://img.shields.io/npm/v/nav-bar.svg)](https://www.npmjs.com/package/nav-bar) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install ilama007/nav-bar
```

## Usage

```jsx
import React, { useState } from 'react'
import NavBar from '@ilama007/nav-bar'
import '@ilama007/nav-bar/dist/index.css'

const App = () => {
  const [triggerClose, setTriggerClose] = useState(false)

  const onButtonClick = () => {
    setTriggerClose(true)
    setTimeout(() => {
      setTriggerClose(false)
    }, 1000)
  }

  /*
    mobileBreakPoint: numeric window size to start triggering mobile menu, required
    triggerHamburgerClose: boolean value to trigger if mobile menu should be closed
  */
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
```

## License

MIT © [Dilip Lama](https://github.com/Dilip Lama)
