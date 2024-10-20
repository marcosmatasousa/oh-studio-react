import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Home from '../Home/Home';
import Profile from '../Profile/Profile';
import Contact from '../Contact/Contact';
import Layout from '../Layout/Layout';

import './App.css'

const routes = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/profile',
        element: <Profile />
      },
      {
        path: 'contact',
        element: <Contact />
      }

    ]
  },
  {
    path: '/profile',
    element: <Home />
  },
  {
    path: '/contact',
    element: <Home />
  }
])

function App() {
  return (
    <>
      <RouterProvider router={routes} />
    </>
  )
}

export default App;
