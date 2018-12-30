<template>
  <div id="app">
      <link rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto"/>
      <Header v-if="['profile', 'all', 'index'].indexOf($route.name) >= 0" />
      <notifications group="portal" />
      <transition name="fade" mode="out-in">
        <router-view>
        </router-view>
      </transition>
  </div>
</template>

<script>
  import setToken from './utils/set-token';
  import Header from './components/Header'

  export default {
    name: 'app',
    created() {
      const token =localStorage.getItem('token');
      if(token) {
        setToken(token);
        this.$store.dispatch('user/setToken', token);
      }
    },
    components: { Header }
  }
</script>

<style>
  * {
    box-sizing: border-box;
  }

  body {
    font-family: Roboto, Helvetica, sans-serif;
    color: #333;
    background-color: #311d16;
    margin: 0;
  }

  input:focus,
  select:focus,
  textarea:focus,
  button:focus {
    outline: none;
  }

  a, a:hover {
    color: #333;
    text-decoration: none;
  }

  form {
    margin-top: 30px;
  }

  .user-symbol {
      background-color: #00cece;
      border-radius: 50%;
      text-align: center;
      line-height: 40px;
      height: 40px;
      width: 40px;
      margin: 10px;
      cursor: pointer
  }

  .portal-link {
    display:block;
    text-align:center;
    margin: 15px 0;
  }

  .portal {
    width: 600px;
    padding: 50px;
    border-radius: 5px;
    background-color: white;
    position: absolute;
    top: 50%;
    left: 50%;
    margin-top: -300px;
    margin-left: -300px;
  }

  .card {
      min-height: 150px;
      margin-bottom: 5px;
      max-width: 600px;
      margin: 5px auto;
      border-radius: 10px;
      background-color: white;
  }

  .input + .input {
    margin: 50px 0;
  }

  .line-input.textarea {
    min-height: 75px;
  }

  /* Animate Route Transition */
  .fade-enter-active,
  .fade-leave-active {
    transition-duration: 0.2s;
    transition-property: opacity;
    transition-timing-function: ease;
  }

  .fade-enter,
  .fade-leave-active {
    opacity: 0
  }

  .cf:before,
  .cf:after {
    content: " ";
    display: table;
  }

  .cf:after {
    clear: both;
  }
</style>