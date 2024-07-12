import { Suspense } from 'react';
import { Outlet, Navigate } from 'react-router-dom';

import MainLayout from 'src/layouts/main';

import { SplashScreen } from 'src/components/loading-screen';

// ----------------------------------------------------------------------

// ----------------------------------------------------------------------

export const componentsRoutes = [
  {
    element: (
      <MainLayout>
        <Suspense fallback={<SplashScreen />}>
          <Outlet />
        </Suspense>
      </MainLayout>
    ),
    children: [
      {
        path: 'components',
        children: [
          {
            path: 'foundation',
            children: [
              {
                element: <Navigate to="/components/foundation/colors" replace />,
                index: true,
              },
            ],
          },
          {
            path: 'mui',
            children: [
              {
                element: <Navigate to="/components/mui/accordion" replace />,
                index: true,
              },
            ],
          },
          {
            path: 'extra',
            children: [
              {
                element: <Navigate to="/components/extra/animate" replace />,
                index: true,
              },
            ],
          },
        ],
      },
    ],
  },
];
