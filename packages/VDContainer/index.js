import { createApp } from 'vue';
import VDContainer from './src/VDContainer.vue';

VDContainer.install = function (Vue) {
    return createApp(Vue).component('VDContainer', VDContainer);
}

export default VDContainer