import { BrowserRouter } from 'react-router-dom'
import React from 'react'
import { ThemeProvider, createGlobalStyle } from 'styled-components'

import { theme } from '../../lib/theme'
import { Router } from '../../router'

const GlobalStyle = createGlobalStyle`
  html, body, main, #root {
    margin: 0;
    padding: 0;
    height: 100%;
    width: 100%;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }
`

export function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <>
          <GlobalStyle />
          <Router />
        </>
      </ThemeProvider>
    </BrowserRouter>
  )
}