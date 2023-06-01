// importiamo la grafica di vue
import { createApp } from 'vue'
import App from './App.vue'
// importiamo bootstrap
import "bootstrap";
//importiamo la constante creata nel file router.js
import { router } from './router';

createApp(App).use(router).mount('#app')
