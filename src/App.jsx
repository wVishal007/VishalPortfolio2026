import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import HomePage from './pages/HomePage'

function App() {
  const browserRouter = createBrowserRouter([{
  path: "/",
  element: <HomePage />,
  children: [
    { path: "about-me" },
    { path: "skills" },
    { path: "projects" },
    { path: "certifications" }
  ]
}])

  return (
  <RouterProvider router={browserRouter}/>
  )
}

export default App
