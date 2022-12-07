import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import router from './router';
import store from './store';
import Preview from './components/Preview.vue';
import './assets/markdown.css';
import YlService from '../packages';

const app = createApp(App);
app.use(router);
app.use(store);
app.use(YlService);
app.component('Preview', Preview);
app.mount('#app');
