import type { AppRouteRecordRaw, AppRouteModule } from '/@/router/types';

import { PAGE_NOT_FOUND_ROUTE } from '/@/router/routes/basic';

import { PageEnum } from '/@/enums/pageEnum';

export const RootRoute: AppRouteRecordRaw = {
  path: '/',
  name: 'Root',
  redirect: PageEnum.BASE_HOME,
  meta: {
    title: 'Root',
  },
};

// Basic routing without permission
export const basicRoutes = [
  // LoginRoute,
  RootRoute,
  // ...mainOutRoutes,
  // REDIRECT_ROUTE,
  PAGE_NOT_FOUND_ROUTE,
];
