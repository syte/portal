<template>
    <div class="portal login">
        <form @submit="submit">
            <Input type="text" name="email" placeholder="Email Address" v-model="user.email" :error="errors.email" />
            <Input type="text" name="firstName" placeholder="First Name" v-model="user.firstName" :error="errors.firstName" />
            <Input type="text" name="lastName" placeholder="Last Name" v-model="user.lastName" :error="errors.lastName" />
            <Input type="password" name="password" placeholder="Password" v-model="user.password" :error="errors.password" />
            <Input type="password" name="confirmPassword" placeholder="Password Confirmation" v-model="user.confirmPassword" :error="errors.confirmPassword"  />
            <Button theme="primary" type="submit">Register</Button>
            <router-link class="portal-link" to="/login">Have a account?</router-link>
        </form>
    </div>
</template>

<script>
    import Input from "./Input.vue";
    import Error from "./Error.vue";
    import Button from "./Button.vue";
    export default {
        data: function() {
            return {
                user: {
                    email: '',
                    firstName: '',
                    lastName: '',
                    password: '',
                    confirmPassword: ''
                },
                errors: {},
                isSaving: false
            }
        },
        methods: {
            submit: async function(e) {
                e.preventDefault();
                this.isSaving = true;
                try {
                    await this.$store.dispatch('user/register', this.user);
                    this.errors = {};
                    this.$notify({
                        type: 'success',
                        group: 'portal',
                        title: 'User created!',
                        text: 'Your user has been created. You can now login and start making posts!'
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
        },
        components: { Input, Button }
    }
</script>