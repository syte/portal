<template>
    <div class="card create">
    <form @submit="submit">
        <Input placeholder="Title" type="text" v-model="editor.title" :error="errors.title"  />
        <Input placeholder="Content" type="textarea" v-model="editor.content" :error="errors.content"  />
        <Button theme="primary" type="submit">Create</Button>
    </form>
  </div>
</template>

<script>
  import Input from "./Input.vue";
  import Button from "./Button.vue";

  const newState = userId => ({
    title: '',
    content: '',
    userId: userId
  })

  export default {
    name: 'create',
    data() {
      return {
        editor: newState(this.user.id),
        errors: {},
        isSaving: false
      }
    },
    props: {
      user: Object
    },
    components: { Input, Button },
    methods: {
      async submit(e) {
        e.preventDefault();
        try {
          this.isSaving = true;
          await this.$store.dispatch('post/addPost', this.editor);
          this.errors = {};
          this.editor = newState(this.user.id);
          this.$notify({
            type: 'success',
            group: 'portal',
            title: 'Post created!',
            text: 'Your post was successfully created!'
          });
        }
        catch(error) {
          if(error.response.status === 400) {
              this.errors = error.response.data.errors;
          }
        }
        finally {
          this.isSaving = false;
        }
      }
    }
  }
</script>

<style scoped>
  .create {
      padding: 40px 15px;
  }
</style>