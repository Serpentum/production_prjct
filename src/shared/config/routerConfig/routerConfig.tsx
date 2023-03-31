import {RouteProps} from "react-router-dom";
import {MainPage} from "pages/MainPage";
import {AboutPage} from "pages/AboutPage";

export enum AppRoutes {
  MAIN = "main",
  ABOUT = "about"
}

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: '/',
  [AppRoutes.ABOUT]: '/about',
}

interface IRoutePathNamed {
  path: string,
  name: string
}

export const RouteLinks: Record<AppRoutes, IRoutePathNamed> = {
  [AppRoutes.MAIN]: {
    path: RoutePath.main,
    name: 'Главная'
  },
  [AppRoutes.ABOUT]: {
    path: RoutePath.about,
    name: 'О сайте'
  },
}

export const routeConfig: Record<AppRoutes, RouteProps> = {
  [AppRoutes.MAIN]: {
    path: RoutePath.main,
    element: <MainPage />
  },
  [AppRoutes.ABOUT]: {
    path: RoutePath.about,
    element: <AboutPage />
  },
}
