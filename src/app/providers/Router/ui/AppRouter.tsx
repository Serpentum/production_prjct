import React, {Suspense} from 'react';
import {Route, Routes} from "react-router-dom";
import {routeConfig} from "shared/config/routerConfig/routerConfig";

const AppRouter = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        {Object.values(routeConfig).map(routeConfig => <Route key={routeConfig.path} {...routeConfig}/>)}
      </Routes>
    </Suspense>
  );
};

export default AppRouter;