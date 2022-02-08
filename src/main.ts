import { createApp } from 'vue'
import App from './App.vue'
import { initAppConfigStore } from '/@/logics/initAppConfig';

function bootstrap() {
  // createApp(App).mount('#app')
  const app = createApp(App);

  // Initialize internal system configuration
  initAppConfigStore();

  app.mount('#app');
}

bootstrap();