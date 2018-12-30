<template>
  <header class="cf">
    <div class="viewport">
    <nav>
      <ul>
        <li>
          <router-link to="/profile">
            <font-awesome-icon icon="user" />
            Profile
          </router-link>
        </li>
        <li>
          <router-link to="/all">
            <font-awesome-icon icon="bolt" />
            All
          </router-link>
        </li>
      </ul>      
    </nav>

    <Dropdown className="settings" :items="[{icon:'sign-out-alt', name: 'Sign Out', onClick:this.logout}]" @onClose="toggle" :isOpen="settingsOpen">
      <div class="user-symbol" @click="toggle" v-html="nameSymbol">
      </div>
    </Dropdown>
    </div>
  </header>
</template>

<script>
import Dropdown from "./Dropdown.vue";
export default {
  name: 'Header',
  data: () => ({
    settingsOpen: false
  }),
  props: {
    msg: String
  },
  methods: {
    toggle() {
      this.settingsOpen = !this.settingsOpen;
    },
    logout() {
      this.$store.dispatch('user/logout');
    }
  },
  computed: {
      nameSymbol() {
        const user = this.$store.state.user.users[this.$store.state.user.currentUser.id];
        return user.firstName.slice(0, 1).toUpperCase();
      },
  },
  components: { Dropdown }
}
</script>

<style scoped>
  header {
    background: white;
  }
  nav {
    float: left;
  }
  ul {
    list-style-type: none;
    padding: 0;
    margin: 0;
  }

  li {
    display: inline-block;
  }

  li a {
      display: inline-block;
      margin: 0 10px;
      padding: 20px 5px;
      color: #00cece;;

  }

  a:hover, a.router-link-active {
    border-bottom: 3px solid #00cece;;
  }

  .settings {
    float:right;
  }

  .viewport {
    max-width: 1024px;
    margin: 0 auto;
  }
</style>
