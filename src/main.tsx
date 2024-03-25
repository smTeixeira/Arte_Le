import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { GlobalCss } from './styles.ts'
import SocialMedias from './components/SocialMedias/index.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <GlobalCss />
    <SocialMedias />
    <App />
  </React.StrictMode>,
)
