let web3
export const state = () => {
  return {
    signIn: false,
    activeToken: 'ETH',
    activeTab: 'exchange',
    isOnline: true,
    serverStatus: true,
    backupStatus: null,
    credentials: null,
    authRedirectUrl: {
      url: '/',
      token: null,
      tokenSubTab: 'info'
    },
    summary: []
  }
}

export const getters = {
  getWeb3: () => web3,
  getActiveToken: state => state.activeToken,
  getActiveTab: state => state.activeTab,
  getSignIn: state => state.signIn,
  getConnection: state => state.isOnline,
  getServerStatus: state => state.serverStatus,
  getBackupStatus: state => state.backupStatus,
  getCredentials: state => state.credentials,
  getAuthRedirectUrl: state => state.authRedirectUrl,
  getSummary: state => state.summary
}

export const actions = {
  async initialiseWeb3(store, action) {
    web3 = action.payload
  },
  updateActiveToken(store, payload) {
    store.commit('updateActiveToken', payload)
  },
  updateAuthStatus(store, payload) {
    store.commit('updateAuthStatus', payload)
  },
  updateConnection(store, payload) {
    store.commit('updateConnection', payload)
  },
  updateServerStatus(store, payload) {
    store.commit('updateServerStatus', payload)
  },
  updateBackupStatus(store, payload) {
    store.commit('updateBackupStatus', payload)
  },
  updateActiveTab(store, payload) {
    store.commit('updateActiveTab', payload)
  },
  updateCredentials(store, payload) {
    store.commit('updateCredentials', payload)
  },
  updateAuthRedirectUrl(store, payload) {
    store.commit('updateAuthRedirectUrl', payload)
  },
  updateSummary(store, payload) {
    store.commit('updateSummary', payload)
  }
}

export const mutations = {
  updateAuthStatus(state, payload) {
    state.signIn = payload
  },
  updateActiveToken(state, payload) {
    state.activeToken = payload
  },
  updateConnection(state, payload) {
    state.isOnline = payload
  },
  updateServerStatus(state, payload) {
    state.serverStatus = payload
  },
  updateBackupStatus(state, payload) {
    state.backupStatus = payload
  },
  updateActiveTab(state, payload) {
    state.activeTab = payload
  },
  updateCredentials(state, payload) {
    state.credentials = payload
  },
  updateAuthRedirectUrl(state, payload) {
    if (payload.url) state.authRedirectUrl.url = payload.url
    if (payload.token) state.authRedirectUrl.token = payload.token || null
    if (payload.tokenSubTab) state.authRedirectUrl.tokenSubTab = payload.tokenSubTab || 'info'
  },
  updateSummary(state, payload) {
    state.summary = payload
  }
}
