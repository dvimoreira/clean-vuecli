<template>
    <div>
        <div class="columns is-centered is-vcentered">
            <div class="column is-variable is-12-mobile is-12-tablet is-7-desktop is-7-widescreen is-7-fullhd"></div>
            <div class="column is-variable is-12-mobile is-12-tablet is-5-desktop is-5-widescreen is-5-fullhd">
                <div class="text-center">
                    <h1 class="main-title">Painel de Acesso</h1>
                </div>

                <div class="form text-center">
                    <b-field>
                        <b-input type="email" v-model="form.email" placeholder="E-mail"></b-input>
                    </b-field>

                    <b-field>
                        <b-input type="password" v-model="form.password" password-reveal placeholder="Senha"></b-input>
                    </b-field>

                    <b-button type="is-info">Login</b-button>
                </div>

                <div class="reset-password text-center">
                    <a href="#">Esqueci minha senha</a>
                </div>

                <div class="create-account text-center">
                    <a href="#">Criar uma conta <i class="icofont-long-arrow-right"></i></a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import AuthService from '@/services/auth/auth'

    export default {
        name: 'auth',
        components: {},
        data () {
            return {
                form: {}
            }
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

<style lang="scss">
    .reset-password, .create-account {
        a {
            color: #918F8F;
            -webkit-transition: all 0.3s;
            transition: all 0.3s;
            &:hover {
                opacity: 0.7;
            }
        }
    }

    @media (min-width: 576px) {}
    @media (min-width: 768px) {}
    @media (min-width: 992px) {}
    @media (min-width: 1200px) {
        .reset-password {
            a {
                display: block;
                margin: 20px 0 80px 0;
            }
        }

        .create-account {
            a {
                display: block;
                margin: 0;
                font-size: 16px;
                font-weight: 700;
                i {
                    font-size: 24px;
                    vertical-align: middle;
                }
            }
        }
    }
</style>
