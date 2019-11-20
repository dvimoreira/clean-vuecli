<template>
    <div>
        <div class="columns is-centered is-vcentered">
            <div class="column is-variable is-12-mobile is-12-tablet is-12-desktop is-12-widescreen is-12-fullhd">
                <h1 class="main-title">Cadastro - <small>Dados da Empresa</small></h1>
            </div>
        </div>

        <div class="form">
            <div class="columns is-centered is-vcentered is-multiline">
                <div class="column is-variable is-12-mobile is-12-tablet is-6-desktop is-6-widescreen is-6-fullhd">
                    <b-field>
                        <b-input type="text" v-model="form.name" placeholder="Nome Completo"></b-input>
                    </b-field>
                </div>

                <div class="column is-variable is-12-mobile is-12-tablet is-12-desktop is-12-widescreen is-12-fullhd text-right">
                    <b-button type="is-info">Proximo <i class="icofont-long-arrow-right"></i></b-button>
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
            return {
                form: {}
            }
        },
        methods: {}
    }
</script>

<style lang="scss" scoped>
    @media (min-width: 576px) {}
    @media (min-width: 768px) {}
    @media (min-width: 992px) {}
    @media (min-width: 1200px) {}
</style>
