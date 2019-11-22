<template>
    <div id="page-finished">
        <div class="columns is-centered is-vcentered">
            <div class="column is-variable is-12-mobile is-12-tablet is-6-desktop is-6-widescreen is-6-fullhd">
                <img src="/img/user-computer.png">
            </div>
            <div class="column is-variable is-12-mobile is-12-tablet is-5-desktop is-offset-1-desktop is-5-widescreen is-offset-1-widescreen is-5-fullhd is-offset-1-fullhd">
                <div class="text-left">
                    <h1 class="main-title">Tudo Pronto!</h1>
                    <p>Estamos analisando seus dados, daqui a pouco
                    entraremos em contato ok?</p>

                    <p>Enquanto isso, de uma olhadinha no seu e-mail
                    e veja só algumas informações beeem importantes
                    que mandamos para você! :D</p>

                    <b-button type="is-info">Voltar ao site</b-button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'auth',
        components: {},
        data () {
            return {}
        },
        methods: {}
    }
</script>

<style lang="scss" scoped>
    @media (min-width: 576px) {}
    @media (min-width: 768px) {}
    @media (min-width: 992px) {}
    @media (min-width: 1200px) {
        #page-finished {
            h1.main-title { margin-bottom: 40px; }
            p {
                font-size: 16px;
                font-weight: 400;
                margin-bottom: 15px;
                &:last-child { margin-bottom: 0; }
            }
        }
    }
</style>
