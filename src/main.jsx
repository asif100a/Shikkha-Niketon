import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Main from './Main/Main.jsx'
import { RouterProvider } from 'react-router-dom'
import routes from './components/routes/routes.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={routes}>
      <Main />
    </RouterProvider>
  </StrictMode>,
)
