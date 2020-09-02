export const state = () => ({
  isLoggedIn : false
});

export const mutations = {
  logIn(state){
    state.isLoggedIn = true;
  },
  logOut(state){
    state.isLoggedIn = false;
  }
}

export const actions = {
  logIn({commit}){
    commit("logIn");
  },
  logOut({commit}) {
    commit("logOut");
  }
}

export const getters = {
  isLoggedIn : (s) => s.isLoggedIn
}
