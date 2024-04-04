import { lazy, Suspense } from 'react';
import { Outlet, Navigate, useRoutes } from 'react-router-dom';
import DashboardLayout from 'src/layouts/dashboard';
import AdminDashboardLayout from 'src/layouts/admin';

export const IndexPage = lazy(() => import('src/pages/app'));
export const ProfilePage = lazy(() => import('src/pages/profile'));
export const BlogPage = lazy(() => import('src/pages/blog'));
export const WishlistPage = lazy(() => import('src/pages/wishlist'));
export const UserPage = lazy(() => import('src/pages/user'));
export const LoginPage = lazy(() => import('src/pages/login'));
export const RegisterPage = lazy(() => import('src/pages/register'));
export const ForgotPage = lazy(() => import('src/pages/forgot'));
export const ProductsPage = lazy(() => import('src/pages/products'));
export const Page404 = lazy(() => import('src/pages/page-not-found'));
export const AdminDashboardPage = lazy(() => import('src/pages/admin-dashboard'));
export const AdminSettingPage = lazy(() => import('src/pages/admin-setting'));
// ----------------------------------------------------------------------

export default function Router() {
  
  const routes = useRoutes([
    {
      element: (
        <DashboardLayout>
          <Suspense>
            <Outlet />
          </Suspense>
        </DashboardLayout>
      ),
      children: [
        { element: <IndexPage />, index: true },
        { path: 'profile', element: <ProfilePage /> },
        { path: 'user', element: <UserPage /> },
        { path: 'products', element: <ProductsPage /> },
        { path: 'blog', element: <BlogPage /> },
        { path: 'wishlist', element: <WishlistPage /> },
      ],
    },
    {
      path: 'admin',
      element: (
        <AdminDashboardLayout>
          <Suspense>
            <Outlet />
          </Suspense>
        </AdminDashboardLayout>
      ),
      children: [
        { path: 'dashboard', element: <AdminDashboardPage /> },
        { path: 'setting', element: <AdminSettingPage /> },
      ],
    },
    {
      path: 'login',
      element: <LoginPage />,
    },
    {
      path: 'register',
      element: <RegisterPage />,
    },
    {
      path: 'forgot',
      element: <ForgotPage />,
    },
    {
      path: '404',
      element: <Page404 />,
    },
    {
      path: '*',
      element: <Navigate to="/404" replace />,
    },
  ]);

  return routes;
}
