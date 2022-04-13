import { createAsyncComponent } from '/@/utils/factory/createAsyncComponent';
import FullScreen from './FullScreen.vue';

export const LayoutBreadcrumb = createAsyncComponent(() => import('./Breadcrumb.vue'));

export { FullScreen };
