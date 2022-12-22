import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import router from './router';
import Preview from './components/Preview.vue';
import './assets/styles/markdown.scss';
import ClService from '../packages';

const app = createApp(App);
app.use(router);
app.use(ClService);
app.component('Preview', Preview);
app.mount('#app');
