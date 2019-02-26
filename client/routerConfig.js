// 以下文件格式为描述路由的协议格式
// 你可以调整 routerConfig 里的内容
// 变量名 routerConfig 为 iceworks 检测关键字，请不要修改名称
import { getRouterData } from './utils';
import { asideMenuConfig } from './menuConfig';

import UserLogin from './pages/UserLogin';
import UserRegister from './pages/UserRegister';
import Analysis from './pages/Analysis';
import Schedule from './pages/Schedule';
import Conversion from './pages/Conversion';
import Dashboard from './pages/Dashboard';
import Waibu from './pages/Waibu';

const routerConfig = [
  {
    path: '/user/login',
    component: UserLogin,
  },
  {
    path: '/user/register',
    component: UserRegister,
  },
  {
    path: '/analysis',
    component: Analysis,
  },
  {
    path: '/dashboard',
    component: Dashboard,
  },
  {
    path: '/schedule',
    component: Schedule,
  },
  {
    path: '/conversion',
    component: Conversion,
  },
  {
    path: '/waibu',
    component:Waibu,
  },
];

const routerData = getRouterData(routerConfig, asideMenuConfig);

export default routerData;
