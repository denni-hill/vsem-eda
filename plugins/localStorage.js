import createPersistedState from 'vuex-persistedstate'

export default ({store}) => {
  createPersistedState({
    key: 'persisted',
    paths: ['user']
  })(store)
}
