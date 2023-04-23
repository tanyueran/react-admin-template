import React from 'react';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';

import './App.scss';
import routes from './routers/index';

function App() {
  return (
    <div id="app">
      <BrowserRouter>
        <div className="flex gap-8px">
          <Link to="/home">首页</Link>
          <Link to="/classScheduleDemo">课表demo</Link>
        </div>
        <Routes>
          {routes.map((item, i) => {
            return (
              <Route
                key={i}
                path={item.path}
                element={
                  <React.Suspense fallback="正在加载。。。">
                    <item.component />
                  </React.Suspense>
                }
              />
            );
          })}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
