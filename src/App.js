import React from 'react';
import myRoutes from './routes/Myrouter'
import { RouterProvider } from 'react-router-dom';
export default function App() {
  return (
      <RouterProvider router={myRoutes} />
  );
}
