import VDContainer from './src/VDContainer.vue';

VDContainer.install = function (app) {
    app.component('VDContainer', VDContainer);
}

export default VDContainer