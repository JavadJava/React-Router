import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import CardContainer from './components/cards/CardContainer'
import Card from './components/cards/Card'
import Root from './routes/Root'
import CardContainerLayout from './components/cards/CardContainerLayout'
import SingleCard from './components/cards/SingleCard'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root/>,
    children: [
      {
        path: '/',
        element: <App/>
      },
      {
        path:'users',
        element: <CardContainerLayout/>,
        children: [
          {
            index: true ,
            element: <CardContainer/>
          },
          {
            path: ":userId",
            element: <SingleCard/>
          }
        ]
      },
      {
        path: 'users/:userid',
        element: <Card/>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
        <RouterProvider router={router}/>
  </React.StrictMode>,
)
