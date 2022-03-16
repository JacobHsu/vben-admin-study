import { withInstall } from '/@/utils';
import basicDrawer from './src/BasicDrawer.vue';

export const BasicDrawer = withInstall(basicDrawer);
export * from './src/typing';
export { useDrawer } from './src/useDrawer'; // , useDrawerInner
