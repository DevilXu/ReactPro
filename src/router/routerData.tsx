import asyncComponent from '../utils/asyncComponent';
const Haha = asyncComponent(() => import('../components/First/index'));
const UserIndex = asyncComponent(() => import('../view/user/index'));

const ROUTER = [
  {
    key: 'haha',
    path: '/about/haha',
    component: Haha,
    requiresAuth: true
  },
  {
    key: 'userIndex',
    path: '/about/userIndex',
    component: UserIndex,
    requiresAuth: true
  },
  {
    key: 'userAdd',
    path: '/about/userAdd',
    component: asyncComponent(() => import('../view/user/addUser')),
    requiresAuth: true
  }
]

export default ROUTER;
