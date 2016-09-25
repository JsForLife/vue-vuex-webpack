/**
 * Created by Administrator on 2016/9/23.
 */
import {addAction} from '../../vuex/action/addAction'
export default {
    template: require('./index.html'),
    vuex:{
        actions: {
            add: addAction
        }
    }
}