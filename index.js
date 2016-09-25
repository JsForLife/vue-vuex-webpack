/**
 * Created by Administrator on 2016/9/22.
 */
import Vue from 'vue'
import Vuex from 'vuex'
import store from './src/vuex/store'
import addComponent from './src/component/addComponent/index.js'
import Display from './src/component/display/index.js'
Vue.use(Vuex)

var app = new Vue({
    el: '#app',
    store:new Vuex.Store(store),
    components: {
        'add':addComponent,
        'display':Display
    }
})