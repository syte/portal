<template>
    <button :class="classObject" :disabled="isSaving">
        <font-awesome-icon v-if="isSaving" icon="spinner" spin />
        <slot></slot>
    </button>
</template>

<script>
    export default {
        props: {
            type: String,
            text: String,
            isSaving: Boolean,
            theme: String
        },
        computed: {
            classObject: function() {
                return {
                    "isSaving": this.isSaving,
                    "flat-button": true,
                    [this.theme]: true
                }
            }
        }
    }
</script>

<style scoped>
    .flat-button {
        width: 100%;
        padding: 10px;
        font-weight: bold;
        text-align: center;
        border-radius: 5px;
        border: none;
        transition: background-color .2s ease-in;
    }
    svg {
        margin-right: 5px;
    }
    .flat-button.primary {
        background-color: #00cece;
        color: white;
    }
    .flat-button:hover {
        background-color: #00adad;
    }

    .flat-button[disabled="disabled"], .flat-button[disabled="disabled"]:hover {
        background-color: #e6e6e6;
    }

</style>