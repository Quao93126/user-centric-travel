import { Helmet } from 'react-helmet-async';

import { AdminDashboard } from 'src/sections/admin/dashboard';

// ----------------------------------------------------------------------

export default function AdminDashboardPage() {
  return (
    <>
      <Helmet>
        <title> Dashboard </title>
      </Helmet>

      <AdminDashboard />
    </>
  );
}
