<template>
    <div class="input">
        <textarea :class="classObject" v-if="type === 'textarea'" :rows="rows" :columns="columns" :value="value" @input="onChange">
        </textarea>
        <input v-else :class="classObject" :type="type" :name="name" :value="value" @input="onChange" />
        <span v-if="placeholder" class="floating-placeholder">{{placeholder}}</span>
        <Error :message="error" />
    </div>
</template>

<script>
    import Error from "./Error.vue"
    export default {
        props: {
            type: String,
            name: String,
            placeholder: String,
            value: String,
            error: String,
            columns: {
                type: Number
            },
            rows: {
                type: Number
            }
        },
        methods: {
            onChange: function(e) {
                this.$emit('input', e.target.value)
            }
        },
        components: { Error },
        computed: {
            classObject: function() {
                return {
                    filled: (this.value || '').length > 0,
                    "line-input": true,
                    [this.type]: true
                }
            }
        }
    }
</script>

<style scoped>
    .input {
        position: relative;
    }
    .floating-placeholder {
        position: absolute;
        pointer-events: none;
        left: 0;
        top: 0;
        transition: 0.2s ease all;
        font-weight: bold;
    }

    .line-input {
        border:none;
        border-bottom: 1px solid #c9c9c9;
        width: 100%;
        height: 30px;
        background: transparent;
    }

    textarea {
        background-color: transparent;
        font-family: inherit;
        line-height: 1.5rem;
    }

    .line-input:focus {
        border-bottom: 1px solid #311d16;
    }
    .line-input.filled ~ .floating-placeholder,
    .line-input:focus ~ .floating-placeholder {
        top: -20px;
        font-size: 15px;
        opacity: 1;
    }
</style>