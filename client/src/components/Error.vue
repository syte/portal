<template>
    <div class="error" v-if="message">{{message}}</div>
</template>

<script>
    export default {
        name: 'error',
        props: {
            message: String
        }
    }
</script>

<style>
    .error {
        color: red;
        margin-top: 5px;
    }
</style>