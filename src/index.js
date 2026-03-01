import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import AboutUs from './components/AboutUs'
import Error from './components/Error';
import RestaurantMenu from './components/RestaurantMenu'
import { createBrowserRouter, RouterProvider } from 'react-router';
import Body from './components/Body';

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Body />
      },
      {
          path: "/about",
          element: <AboutUs />
      },
      {
          path: "/resmenu/:resId",
          element: <RestaurantMenu />
      }
    ],
    errorElement: <Error />
  },
  
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router= {appRouter}>
  {/* <React.StrictMode>
    <App />
  </React.StrictMode> */}
  </RouterProvider>
);


root.render(<RouterProvider router ={appRouter} />)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
