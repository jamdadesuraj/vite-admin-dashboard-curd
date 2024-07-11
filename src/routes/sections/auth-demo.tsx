import { lazy, Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import AuthModernLayout from 'src/layouts/auth/modern';
import AuthModernCompactLayout from 'src/layouts/auth/modern-compact';

import { SplashScreen } from 'src/components/loading-screen';

// ----------------------------------------------------------------------

// MODERN
const LoginModernPage = lazy(() => import('src/pages/auth-demo/modern/login'));
const RegisterModernPage = lazy(() => import('src/pages/auth-demo/modern/register'));
const ForgotPasswordModernPage = lazy(() => import('src/pages/auth-demo/modern/forgot-password'));
const VerifyModernPage = lazy(() => import('src/pages/auth-demo/modern/verify'));
const NewPasswordModernPage = lazy(() => import('src/pages/auth-demo/modern/new-password'));

// ----------------------------------------------------------------------

const authModern = {
  path: 'modern',
  element: (
    <Suspense fallback={<SplashScreen />}>
      <Outlet />
    </Suspense>
  ),
  children: [
    {
      path: 'login',
      element: (
        <AuthModernLayout>
          <LoginModernPage />
        </AuthModernLayout>
      ),
    },
    {
      path: 'register',
      element: (
        <AuthModernLayout>
          <RegisterModernPage />
        </AuthModernLayout>
      ),
    },
    {
      element: (
        <AuthModernCompactLayout>
          <Outlet />
        </AuthModernCompactLayout>
      ),
      children: [
        { path: 'forgot-password', element: <ForgotPasswordModernPage /> },
        { path: 'new-password', element: <NewPasswordModernPage /> },
        { path: 'verify', element: <VerifyModernPage /> },
      ],
    },
  ],
};

export const authDemoRoutes = [
  {
    path: 'auth-demo',
    children: [authModern],
  },
];
