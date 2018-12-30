<template>
  <div class="profile">
    <Create :user="$store.state.user.users[$store.state.user.currentUser.id]" :canEdit="true" />
    <div v-for="post in getPosts" :key="post.id">
        <Post :post="post" :user="$store.state.user.users[$store.state.user.currentUser.id]" :canEdit="true" />
    </div>
  </div>
</template>

<script>
  import Post from "./Post.vue"
  import Create from "./Create.vue"
  export default {
    name: 'Profile',
    components: {Post, Create},
    methods: {
      fetchMore() {
        if ((window.innerHeight + window.pageYOffset) >= document.body.offsetHeight) {
          this.$store.dispatch('post/queryPostsProfile', this.$store.state.user.currentUser.id);
      }
    }
    },
    created() {
      if(!this.$store.state.post.pagination.profile.initialized) {
        this.$store.dispatch('post/queryPostsProfile', this.$store.state.user.currentUser.id);
      }

      window.addEventListener('scroll', this.fetchMore);
    },
    computed: {
        getPosts() {
           return Object.values(this.$store.state.post.posts)
                .filter(p => p.userId === this.$store.state.user.currentUser.id)
                .sort((a,b) => a.offset > b.offset ? -1 : a.offset < b.offset ? 1 : 0)
        }
    },
    destroyed() {
      window.removeEventListener('scroll', this.fetchMore);
    }
  }
</script>