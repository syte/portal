import * as A from "../../api/user";
import setToken from "../../utils/set-token";
import jwt from 'jsonwebtoken';
import Vue from "vue";

const state = {
    currentUser: {
        id: null,
        isAuthenticated: false
    },
    users: {},
}

const mutations = {
    setUser: (state, user) => state.currentUser = {
        id: user ? user.id : null ,
        isAuthenticated: !!user.id
    },
    addUser: (state, user) => state.users[user.id] = user,
    addUsers: (state, users) => state.users = {...state.users, ...users } 
}

const actions = {
    login: async ({commit}, credentials) => {
        const { data } = await A.login(credentials);
        setToken(data.token);
        localStorage.setItem('token', data.token);
        commit('addUser', data.user);
        commit('setUser', data.user);
        Vue.router.push('profile')
    },
    register: async (context, user) => {
        await A.register(user);
        Vue.router.push('/login');
    },
    logout: () => {
        setToken(null);
        localStorage.setItem('token', null);
        Vue.router.push('/login');
    },
    addUsers({commit}, users) {
        commit('addUsers', users);
    },
    setToken: ({commit}, token) => {
        const { data } = jwt.decode(token);
        commit('setUser', data);
        commit('addUser', data)
    }
}

export default {
    namespaced: true,
    state,
    actions,
    mutations
};