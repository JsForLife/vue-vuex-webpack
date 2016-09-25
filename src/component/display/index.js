/**
 * Created by Administrator on 2016/9/23.
 */
import getCount from '../../vuex/getter/countGetter'
export default {
    template:require('./index.html'),
    vuex: {
        getters: {
            count: getCount
        }
    }
}