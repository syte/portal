<template>
  <div class="post card">
      <div class="user cf">
        <div v-html="nameSymbol" class="user-symbol">
        </div>
        <div class="info">
          <div class="name" v-html="name"></div>
          <div class="date" v-html="date"></div>
        </div>
      </div>
      <div class="body">
        <h2 class="title">{{post.title}}</h2>
        <div class="content">
          {{post.content}}
        </div>
      </div>
      <div v-if="isEditing" class="editor cf">
        <form @submit="submit">
        <font-awesome-icon class="close-btn" icon="times" @click="setEditing" />
          <Input placeholder="Title" type="text" v-model="editor.title" :error="errors.title" />
          <Input placeholder="Content" type="textarea" v-model="editor.content" :error="errors.content" />
          <Button theme="primary" type="submit" :isSaving="isSaving">Save Changes</Button>
        </form>
      </div>
      <div v-if="canEdit">
        <div class="controls">
          <span class="action" @click="setEditing"><font-awesome-icon icon="pencil-alt" />Edit</span>
          <span class="action" @click="remove"><font-awesome-icon icon="times" />Delete</span>
        </div>
      </div>
  </div>
</template>

<script>
  import Input from "./Input.vue";
  import Button from "./Button.vue";
  export default {
    name: 'post',
    data() {
      return {
        editor: {...this.post},
        isEditing: false,
        errors: {},
        isSaving: false
      }
    },
    props: {
      post: Object,
      canEdit: Boolean,
      user: Object
    },
    components: { Input, Button },
    methods: {
      async submit(e) {
        e.preventDefault();
        try {
          this.isSaving = true;
          await this.$store.dispatch('post/updatePost', this.editor);
          this.$notify({
            type: 'success',
            group: 'portal',
            title: 'Post saved!',
            text: 'Your post was successfully saved!'
          });
          this.errors = {};
        }
         catch(error) {
            if(error.response.status === 400) {
                this.errors = error.response.data.errors;
            }
        }
        finally {
          this.isSaving = false;
        }
      },
      async remove() {
          await this.$store.dispatch('post/deletePost', this.post.id );
          this.$notify({
            type: 'success',
            group: 'portal',
            title: 'Post deleted!',
            text: 'Your post was successfully deleted!'
          });
      },
      setEditing() {
        this.isEditing = !this.isEditing;
      }
    },
    computed: {
      nameSymbol() {
        return this.user.firstName.slice(0, 1).toUpperCase();
      },
      name() {
        return this.user.firstName + ' ' + this.user.lastName;
      },
      date() {
        var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        return new Date(this.post.updatedAt).toLocaleDateString("en-US", options);
      }
    }
  }
</script>

<style scoped>
  .body {
    padding: 15px;
    word-break: break-all;
  }

  .user {
      border-bottom: 1px solid #e8e8e8;
  }

  .user .info, .user .user-symbol {
    display: inline-block;
  }

  .user .info .date {
    color: gray;
    font-style: italic;
  }

  .info {
    position: relative;
    top: 10px;
  }

  .controls {
      cursor: pointer;
      padding: 15px;
      background-color: #00cece;
      color: white;
      border-top: 1px solid gray;
      border-radius: 0px 0px 5px 5px;
      border-top: 3px solid #00b7b7;
      color: #ffffff;
  }

  .editor {
    background-color: #d0d0d0;
    padding: 30px 15px;
    border-top: 3px solid #9e9e9e;
    position: relative;
  }

  .close-btn {
    position:absolute;
    top: 15px;
    right: 15px;
    cursor: pointer;
  }
  
  .action + .action  {
    margin-left: 15px;
    display: inline-block;
  }

  .action svg {
    margin-right: 5px;
  }
</style>