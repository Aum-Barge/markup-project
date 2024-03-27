import React from 'react';
import ReactDOM from 'react-dom';
import { createHashRouter, RouterProvider } from 'react-router-dom';
import App from './App.jsx';
import './index.css';
import Home from './Pages/Home.jsx';
import Editor from './Pages/Editor.jsx';

const router = createHashRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/markup-project/editor',
    element: <Editor />,
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
