<template>
    <div class="portal login">
        <Alert :message="errors.global" />
        <form @submit="submit">
            <Input type="email" name="email" placeholder="Email Address" v-model="email" :error="errors.email" />
            <Input type="password" name="password" placeholder="Password" v-model="password" :error="errors.password" />
            <Button theme="primary" type="submit" :isSaving="isSaving">Login</Button>
            <router-link class="portal-link" to="/register">Don't have an account?</router-link>
        </form>
    </div>
</template>

<script>
    // TODO: handle number inputs.
    // TODO: setup index
    import Input from "./Input.vue";
    import Button from "./Button.vue";
    import Alert from "./Alert.vue";
    export default {
        data: function() {
            return {
                email: '',
                password: '',
                errors: {
                },
                isSaving: false
            }
        },
        name: 'Login',
        components: { Input, Button, Alert },
        methods: {
            submit: async function(e) {
                e.preventDefault();
                try {
                    this.isSaving = true;
                    await this.$store.dispatch('user/login', {email: this.email, password: this.password });
                    this.errors = {};
                }
                catch(error) {
                    if(error.response.status === 400) {
                        this.errors = error.response.data.errors;
                    }
                    if(error.response.status === 401) {
                        this.errors.global = 'User name or password is invalid';
                    }
                }
                finally {
                    this.isSaving = false;
                }
            }
        },
    }
</script>