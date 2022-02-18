import { createApp } from 'vue'
import App from './App.vue'
import { initAppConfigStore } from '/@/logics/initAppConfig';
import { setupI18n } from '/@/locales/setupI18n';

async function bootstrap() {
  // createApp(App).mount('#app')
  const app = createApp(App);

  // Initialize internal system configuration
  initAppConfigStore();

  // Multilingual configuration
  // Asynchronous case: language files may be obtained from the server side
  await setupI18n(app);

  app.mount('#app');
}

bootstrap();