import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Hide initial loading content when React app is ready
const hideInitialLoading = () => {
  const initialLoading = document.getElementById('initial-loading')
  if (initialLoading) {
    initialLoading.style.display = 'none'
  }
  document.body.classList.add('react-loaded')
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

// Hide initial loading after a short delay to ensure smooth transition
setTimeout(hideInitialLoading, 100)
