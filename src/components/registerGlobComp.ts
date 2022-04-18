import type { App } from 'vue';
import { Button } from './Button';
import { Input, Layout, Modal} from 'ant-design-vue';

export function registerGlobComp(app: App) {
  app.use(Input).use(Button).use(Layout).use(Modal);
}
