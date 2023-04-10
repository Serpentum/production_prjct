import React, { Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import { routeConfig } from 'shared/config/routerConfig/routerConfig'
import { PageLoader } from 'widgets/PageLoader'

export const AppRouter = () => {
  return (
    <Suspense fallback={<PageLoader />}>
      <Routes>
        {Object.values(routeConfig)
          .map(({ element, ...routeConfig }) =>
            <Route key={routeConfig.path} {...routeConfig} element={(
              <div className={'content_wrapper'}>
                {element}
              </div>
            )}/>
          )}
      </Routes>
    </Suspense>
  )
}
