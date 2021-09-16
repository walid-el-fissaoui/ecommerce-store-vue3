const state = () => ({
    user_token: null,
    user: null
});
const mutations = {
    setUserToken(state,payload) {
        state.user_token = payload.user_token
    },
    setUser(state,payload) {
        state.user = payload.user
    }
};
const actions = {

};
export default {
    state,
    mutations,
    actions
}