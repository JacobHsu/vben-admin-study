import { createAsyncComponent } from '/@/utils/factory/createAsyncComponent';

export const ThemeColorPicker = createAsyncComponent(() => import('./ThemeColorPicker.vue'));
