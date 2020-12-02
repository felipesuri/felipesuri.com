/* eslint-disable no-underscore-dangle */
import React, { useState, useEffect } from 'react'
import { Helmet } from 'react-helmet'

import * as S from './styled'

const ToggleTheme = () => {
  const [theme, setTheme] = useState(null)

  const lightTheme = 'theme-light'
  const darkTheme = 'theme-dark'
  const darkMode = theme === darkTheme

  useEffect(() => {
    setTheme(window.__theme)
    window.__onThemeChange = () => setTheme(window.__theme)
  }, [])

  const onChange = () => {
    window.__setTheme(darkMode ? lightTheme : darkTheme)

    if (window && window.DISQUS !== undefined) {
      window.setTimeout(() => window.DISQUS.reset({ reload: true }), 600)
    }
  }

  return (
    <S.ToggleTheme active={!darkMode} onClick={onChange}>
      <Helmet>
        <body className={`${theme}`} />
      </Helmet>
      <S.ToggleThemeTrack />
    </S.ToggleTheme>
  )
}

export default ToggleTheme
