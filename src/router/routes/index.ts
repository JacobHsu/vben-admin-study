import type { AppRouteRecordRaw, AppRouteModule } from '/@/router/types';

import { PAGE_NOT_FOUND_ROUTE } from '/@/router/routes/basic';

import { PageEnum } from '/@/enums/pageEnum';
import { t } from '/@/hooks/web/useI18n';

export const asyncRoutes = [PAGE_NOT_FOUND_ROUTE];

export const RootRoute: AppRouteRecordRaw = {
  path: '/',
  name: 'Root',
  redirect: PageEnum.BASE_HOME,
  meta: {
    title: 'Root',
  },
};

export const LoginRoute: AppRouteRecordRaw = {
  path: '/login',
  name: 'Login',
  component: () => import('/@/views/sys/login/Login.vue'),
  meta: {
    title: t('routes.basic.login'),
  },
};

export const DashboardRoute: AppRouteRecordRaw = {
  path: '/dashboard',
  name: 'Dashboard',
  component: () => import('/@/views/dashboard/analysis/index.vue'),
  meta: {
    title: 'Dashboard',
  },
};


// Basic routing without permission
export const basicRoutes = [
  DashboardRoute,
  LoginRoute,
  RootRoute,
  // ...mainOutRoutes,
  // REDIRECT_ROUTE,
  PAGE_NOT_FOUND_ROUTE,
];
