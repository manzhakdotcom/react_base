import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Posts from '../pages/Posts';
import { privateRoutes } from '../router/router';

const AppRouter = () => {
  return (
    <Routes>
      {privateRoutes.map(route => (
        <Route
          element={route.component}
          path={route.path}
          exact={route.exact}
          key={route.path}
        />
      ))}
      <Route path='*' element={<Posts />} />
    </Routes>
  );
};

export default AppRouter;
