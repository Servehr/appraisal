import React, { useEffect, useState } from 'react';
import './App.css';
import { Route, Routes, useRoutes } from 'react-router-dom';
import { RoutePath } from './route/RoutePath';


export function App() 
{
  const element = useRoutes(
    [
      { path: "/*", element: <RoutePath /> }
    ]
  )
  return element
}
export default App;
