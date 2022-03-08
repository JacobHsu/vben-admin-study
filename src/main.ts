import 'virtual:windi-base.css';
import 'virtual:windi-components.css';
import 'virtual:windi-utilities.css';
import '/@/design/index.less';
import { createApp } from 'vue'
import App from './App.vue'
import { initAppConfigStore } from '/@/logics/initAppConfig';
import { router, setupRouter } from '/@/router';
import { setupRouterGuard } from '/@/router/guard';
import { setupStore } from '/@/store';
import { setupI18n } from '/@/locales/setupI18n';

async function bootstrap() {
  // createApp(App).mount('#app')
  const app = createApp(App);

  // Configure store
  setupStore(app);

  // Initialize internal system configuration
  initAppConfigStore();

  // Multilingual configuration
  // Asynchronous case: language files may be obtained from the server side
  await setupI18n(app);

  // Configure routing
  setupRouter(app);

  // router-guard
  setupRouterGuard(router);

  app.mount('#app');
}

bootstrap();