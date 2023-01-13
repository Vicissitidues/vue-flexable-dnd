import App from './App.vue'
import VDContainer from './../packages/index'
import {createApp} from 'vue'

// VDContainer.install(App).mount('#app');
createApp(App).use(VDContainer).mount('#app');