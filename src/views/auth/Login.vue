<template>
    <div>dfgdfg</div>
</template>

<script>
    import AuthService from '@/services/auth/auth'

    export default {
        name: 'auth',
        components: {},
        data () {
            return {}
        },
        methods: {
            async onLogin (email, password) {
                try {
                    this.loading = true

                    let data = {
                        email: email,
                        password: password
                    }

                    let result = await AuthService.login(data)

                    if (result.status === 200) {
                        this.$store.dispatch('login', result.data)
                        this.$router.push({ name: 'painel.dashboard' })
                        return
                    } else if (result.status === 422) {
                        for (const key in result.data.errors) {
                            if (result.data.errors.hasOwnProperty(key)) {
                                const element = result.data.errors[key]
                                throw Error(element.message)
                            }
                        }
                        return
                    }
                    throw Error(result.data.message)
                } catch (e) {
                    this.loading = false
                } finally {
                    this.loading = false
                }
            },

            async onRegister () {
                try {
                    this.loading = true

                    var data = {
                        full_name: this.form.register.full_name,
                        email: this.form.register.email,
                        mobile_phone: this.form.register.mobile_phone,
                        dt_birth: this.form.register.dt_birth,
                        password: this.form.register.password,
                        isOrganizer: true
                    }

                    let result = await AuthService.register(data)

                    if (result.status === 200) {
                        this.onLogin(this.form.register.email, this.form.register.password)
                        return
                    } else if (result.status === 422) {
                        for (const key in result.data.errors) {
                            if (result.data.errors.hasOwnProperty(key)) {
                                const element = result.data.errors[key]
                                throw Error(element.message)
                            }
                        }
                        return
                    }
                    throw Error(result.data.message)
                } catch (e) {
                    this.loading = false
                } finally {
                    this.loading = false
                }
            }
        }
    }
</script>

<style lang="scss"></style>
