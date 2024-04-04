import SvgColor from 'src/components/svg-color';
// ----------------------------------------------------------------------

const icon = (name) => (
  <SvgColor src={`/assets/icons/navbar/${name}.svg`} />
);

const navConfig = [
  {
    title: 'Dashboard',
    path: '/admin/dashboard',
    icon: icon('menu'),
  },
  {
    title: 'Setting',
    path: '/admin/setting',
    icon: icon('setting'),
  },
];

export default navConfig;
