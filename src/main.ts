import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
// router
import router from './routers';

const app = createApp(App);

app
  .use(router)
  .mount('#app')
  .$nextTick(() => {
    // Use contextBridge
    window.ipcRenderer.on('main-process-message', (_event, message) => {
      console.log(message);
    });
  });
