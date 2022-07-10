import {reqCategoryList} from '@/api';

// home模块小仓库
const state = {
    // state中数据默认初始值为空，根据接口的返回值
    categoryList:[],
};
const mutations = {
    CATEGORYLIST(state,categoryList){
        state.categoryList = categoryList; 
        state.categoryList = state.categoryList.slice(0,16); //多一个数据
    }
};
const actions = {
    // 通过API里面的接口函数调用，向服务器发请求，获取服务器的数据
    async categoryList({commit}){
        let result = await reqCategoryList();
        if(result.code==200){
            commit("CATEGORYLIST", result.data);
        }
    }
};
const getters = {};
export default {
    state,
    mutations,
    actions,
    getters
}