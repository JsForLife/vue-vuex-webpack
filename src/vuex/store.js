/**
 * Created by Administrator on 2016/9/22.
 */
const state = {
    count:0
}

const mutations = {
    INCREMENT:(state,amount)=>{
        state.count += amount
    }
}

export default {
    state,
    mutations
}