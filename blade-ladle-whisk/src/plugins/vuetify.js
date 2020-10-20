import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        themes:{
            light: {
                primary: '#4caf50',
                secondary: '#8bc34a',
                accent: '#cddc39',
                error: '#ffeb3b',
                warning: '#ffc107',
                info: '#ff9800',
                success: '#ff5722',
            },

            dark:{
                    primary: '#9c27b0',
                    secondary: '#673ab7',
                    accent: '#3f51b5',
                    error: '#2196f3',
                    warning: '#03a9f4',
                    info: '#00bcd4',
                    success: '#009688',
            },
        },
    },
})
