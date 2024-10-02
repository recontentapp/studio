import { Theme } from '@radix-ui/themes'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { App } from './App'

import '@radix-ui/themes/styles.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Theme
      appearance="dark"
      radius="large"
      accentColor="blue"
      grayColor="slate"
    >
      <App />
    </Theme>
  </StrictMode>,
)
