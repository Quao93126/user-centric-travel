import { Helmet } from 'react-helmet-async';

import { AdminSetting } from 'src/sections/admin/setting';

// ----------------------------------------------------------------------

export default function AdminSettingPage() {
  return (
    <>
      <Helmet>
        <title> Setting </title>
      </Helmet>

      <AdminSetting />
    </>
  );
}
