<template>
    <div class="alert" v-if="message">
        <font-awesome-icon icon="exclamation-triangle"></font-awesome-icon>
        {{message}}
    </div>
</template>

<script>
    export default {
        name: 'alert',
        props: {
            message: String
        }
    }
</script>

<style>
    .alert {
        background-color: maroon;
        color: white;
        border-radius: 5px;
        padding: 5px;
    }
    /* Can add more types later if needed */
</style>