import React from 'react';
import ReactDOM from 'react-dom';
import { createHashRouter, RouterProvider } from 'react-router-dom';
import App from './App.jsx';
import './index.css';
import Home from './Pages/Home.jsx';
import Editor from './Pages/Editor.jsx';

const router = createHashRouter({
  basename: '/markup-project', // Set the base URL here
  routes: [
    {
      path: '/',
      element: <Home />,
    },
    {
      path: '/editor',
      element: <Editor />,
    }
  ]
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
