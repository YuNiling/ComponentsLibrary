import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import router from './router';
<<<<<<< HEAD
// import store from './store';
import Preview from './components/Preview.vue';
import './assets/markdown.css';
import YlService from '../packages';

const app = createApp(App);
app.use(router);
// app.use(store);
app.use(YlService);
=======
import Preview from './components/Preview.vue';
import './assets/styles/markdown.scss';
import ClService from '../packages';

const app = createApp(App);
app.use(router);
app.use(ClService);
>>>>>>> 410ec5cfcf005e23e799810ac52cc13d41d30208
app.component('Preview', Preview);
app.mount('#app');
