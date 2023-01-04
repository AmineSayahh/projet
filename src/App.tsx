import { Suspense, useEffect } from 'react'

import './app.css'
import { useRoutes } from 'react-router-dom'
import LAYOUT_ROUTE from './layout/routes/routes'
import { AUTH_ROUTES } from './modules/auth/routes/routes'
import Loader from './components/Loader/Loader'

function App() {
  const routes = useRoutes([...AUTH_ROUTES, ...LAYOUT_ROUTE])
  useEffect(() => {}, [])
  return (
    <div className="App">
      <Suspense fallback={<Loader />}>{routes}</Suspense>

      
    </div>
  )
}

export default App
