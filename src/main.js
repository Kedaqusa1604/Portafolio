import { createApp } from 'vue'
import FontAwesomeIcon from './utils/fontAwesome.js'
import App from './App.vue'
import router from './router'
import store from './store'
import "semantic-ui-css/semantic.min.css";

createApp(App).component('fa', FontAwesomeIcon).use(router).use(store).mount('#app')