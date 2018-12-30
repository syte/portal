<template>
  <div class="all">
    <div v-for="post in getPosts" :key="post.id">
        <Post :post="post" :user="$store.state.user.users[post.userId]" :canEdit="false" />
    </div>
  </div>
</template>

<script>
  import Post from "./Post.vue"
  export default {
    name: 'All',
    methods: {
      fetchMore() {
         if ((window.innerHeight + window.pageYOffset) >= document.body.offsetHeight) {
            this.$store.dispatch('post/queryPosts');
        }
      }
    },
    components: { Post },
    created() {
      if(!this.$store.state.post.pagination.all.initialized) {
        this.$store.dispatch('post/queryPosts');
      }

       window.addEventListener('scroll', this.fetchMore);
    },
    computed: {
        getPosts() {
           return Object.values(this.$store.state.post.posts)
                .sort((a,b) => a.offset > b.offset ? -1 : a.offset < b.offset ? 1 : 0)
        }
    },
    destroyed() {
      window.removeEventListener('scroll', this.fetchMore);
    }
  }
</script>