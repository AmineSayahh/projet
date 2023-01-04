import { ChakraProvider } from '@chakra-ui/react'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'


import App from './App'


import '@fontsource/open-sans/700.css'
import '@fontsource/open-sans/600.css'
import '@fontsource/open-sans/400.css'
import '@fontsource/open-sans/500.css'
import '@fontsource/open-sans/300.css'
import '@fontsource/open-sans/800.css'
import { theme } from './theme/customTheme'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      
        <ChakraProvider theme={theme}>
          <App />
        </ChakraProvider>
      
    </BrowserRouter>
  </React.StrictMode>
)
