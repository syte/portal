<template>
    <div class="not-found">
        <div class="status">
            404
        </div>
        <div class="message">
            Sorry, we were able to find the page you were looking for. If you think this is an issue, please
            connect our helpline.
        </div>
        </div>
</template>

<script>
    export default {
        name: 'NotFound',
    }
</script>

<style scoped>
    .not-found {
        color: gray;
        font-size: 20px;
        margin-top: 200px;
        text-align: center;
    }

    .status {
        font-size: 250px;
        font-weight:  bold;
    }

    .message {
        width: 400px;
        margin: 0 auto;

    }
</style>