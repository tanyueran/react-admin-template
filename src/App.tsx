import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './App.scss';
import routes from './routers/index';

function App() {
  return (
    <div id="app">
      <BrowserRouter>
        <Routes>
          {routes.map((item, i) => {
            return <Route key={i} path={item.path} element={<item.component />} />;
          })}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
