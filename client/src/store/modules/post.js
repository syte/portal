import * as A from "../../api/post";
import Vue from "vue";

const state = {
    posts: {},
    pagination: {
        all: {
            initialized: false,
            offset: null,
        },
        profile: {
            initialized: false,
            offset: null
        }
    },
}

const mutations = {
    addPost: (state, post) => Vue.set(state.posts, post.id, post),
    addPosts: (state, posts) => state.posts = {...state.posts, ...posts },
    deletePost: (state, id) => Vue.delete(state.posts, id),
    updatePost: (state, post) => state.posts[post.id] = post,
    setPagination: (state, {type, initialized, offset}) => state.pagination[type] = { initialized, offset }
}

const actions = {
    deletePost: async ({commit}, id) => {
        await A.deletePost(id);
        commit('deletePost', id);
    },
    updatePost: async ({commit}, post) => {
        const {data} = await A.updatePost(post);
        commit('updatePost', data);
    },
    queryPosts: async ({state, commit, dispatch}) => {
        const { offset, initialized } = state.pagination.all;
        if(offset || !initialized) {
            const { data } = await A.paginatePosts({ offset });
            commit('addPosts', data.posts);
            commit('setPagination', { type: "all", offset: data.offset, initialized: true });
            dispatch('user/addUsers', data.users, { root: true });
        }
    },
    queryPostsProfile: async ({state, commit, dispatch}, userId) => {
        const { offset, initialized } = state.pagination.profile;
        if(offset || !initialized) {
            const { data } = await A.paginatePosts({ offset, userId });
            commit('addPosts', data.posts);
            commit('setPagination', { type: "profile", offset: data.offset, initialized: true  });
            dispatch('user/addUsers', data.users, { root: true });
        }
    },
    addPost: async ({commit}, post) => {
        const {data} = await A.addPost(post);
        commit('addPost', data);
    }
}

export default {
    namespaced: true,
    state,
    actions,
    mutations
};