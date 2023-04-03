import React, {Suspense} from 'react';
import {Route, Routes} from "react-router-dom";
import {routeConfig} from "shared/config/routerConfig/routerConfig";

export const AppRouter = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        {Object.values(routeConfig)
          .map(({element, ...routeConfig}) =>
              <Route key={routeConfig.path} {...routeConfig} element={(
                <div className={'content_wrapper'}>
                  {element}
                </div>
              )}/>
          )}
      </Routes>
    </Suspense>
  );
};
