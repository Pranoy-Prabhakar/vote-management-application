import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        themes: {
            light: {
                primary: '#2b0a3d',
                secondary: '#0070ad',
                accent: '#8c9eff',
                error: '#b71c1c',
                background: '#ececec'
            },
        },
    },
});
