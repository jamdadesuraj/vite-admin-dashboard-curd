import { paths } from 'src/routes/paths';

import Iconify from 'src/components/iconify';

// ----------------------------------------------------------------------

export const navConfig = [
  {
    title: 'Login',
    icon: <Iconify icon="solar:notebook-bold-duotone" />,
    path: paths.auth.jwt.login,
  },
];
