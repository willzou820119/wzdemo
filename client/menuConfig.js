// 菜单配置
// headerMenuConfig：头部导航配置
// asideMenuConfig：侧边导航配置

const headerMenuConfig = [
  {
    name: '首页',
    path: '/',
    icon: 'home',
  },
  {
    name: '反馈',
    path: '/',
    external: true,
    newWindow: true,
    icon: 'message',
  },
  {
    name: '帮助',
    path: '/',
    external: true,
    newWindow: true,
    icon: 'bangzhu',
  },
];

const asideMenuConfig = [
  {
    name: '实时监控',
    path: '/dashboard',
    icon: 'home2',
  },
  {
    name: '用户分析',
    path: '/analysis',
    icon: 'person',
  },
  {
    name: 'AI风险预测',
    path: '/schedule',
    icon: 'question2',
  },
  {
    name: '产品分析',
    path: '/conversion',
    icon: 'cascades',
  },
  {
    name: '外部',
    //path: '/conversion',
    path: '/waibu',
    icon: 'cascades',
  },
];

export { headerMenuConfig, asideMenuConfig };
