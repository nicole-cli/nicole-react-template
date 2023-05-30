import React from 'react';
import { HashRouter, Navigate, Outlet, useRoutes } from 'react-router-dom';
import type { NonIndexRouteObject } from 'react-router';

import PageA from '@/pages/page-a/PageA';

import App from '../App';
import { AuthGuard } from './AuthGuard';

interface ExtraRouteObject extends NonIndexRouteObject {
  breadcrumbName?: string;
  children?: ExtraRouteObject[];
}

const routes: ExtraRouteObject[] = [
  {
    path: '',
    breadcrumbName: '首页',
    element: (
      <AuthGuard>
        <Outlet />
      </AuthGuard>
    ),
    children: [
      // 首页
      {
        path: '',
        element: <Navigate to="/home" replace />,
      },
      {
        path: 'home',
        breadcrumbName: '主页面',
        element: <App />,
      },
      {
        path: 'page-a',
        breadcrumbName: '页面A',
        element: <PageA />,
      },
    ],
  },
];

const MyRouteList = () => useRoutes(routes);

export function RoutesRootComponent() {
  return (
    <HashRouter>
      <React.Suspense fallback={<div>LOADING...</div>}>
        <MyRouteList />
      </React.Suspense>
    </HashRouter>
  );
}
