import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

/*
    Bootstrap Styles
 */
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";  // js file

createApp(App).use(store).use(router).mount('#app')
