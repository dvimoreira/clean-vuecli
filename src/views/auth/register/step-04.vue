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
                        <b-input type="text" v-model="form.company_name" placeholder="Razão Social"></b-input>
                    </b-field>
                </div>

                <div class="column is-variable is-12-mobile is-12-tablet is-6-desktop is-6-widescreen is-6-fullhd">
                    <b-field>
                        <b-input type="text" v-model="form.cnpj" placeholder="CNPJ"></b-input>
                    </b-field>
                </div>

                <div class="column is-variable is-12-mobile is-12-tablet is-12-desktop is-12-widescreen is-12-fullhd">
                    <b-field>
                        <b-input type="text" v-model="form.responsible" placeholder="Nome do Responsável"></b-input>
                    </b-field>
                </div>

                <div class="column is-variable is-12-mobile is-12-tablet is-12-desktop is-12-widescreen is-12-fullhd">
                    <h2>Endereço</h2>
                </div>

                <div class="column is-variable is-12-mobile is-12-tablet is-6-desktop is-6-widescreen is-6-fullhd">
                    <b-field>
                        <b-input type="text" v-model="form.postal_code" placeholder="CEP"></b-input>
                    </b-field>
                </div>

                <div class="column is-variable is-12-mobile is-12-tablet is-6-desktop is-6-widescreen is-6-fullhd">
                    <b-field>
                        <b-input type="text" v-model="form.district" placeholder="Bairro"></b-input>
                    </b-field>
                </div>

                <div class="column is-variable is-12-mobile is-12-tablet is-4-desktop is-4-widescreen is-4-fullhd">
                    <b-field>
                        <b-input type="text" v-model="form.street" placeholder="Rua"></b-input>
                    </b-field>
                </div>

                <div class="column is-variable is-12-mobile is-12-tablet is-4-desktop is-4-widescreen is-4-fullhd">
                    <b-field>
                        <b-input type="text" v-model="form.number" placeholder="Número"></b-input>
                    </b-field>
                </div>

                <div class="column is-variable is-12-mobile is-12-tablet is-4-desktop is-4-widescreen is-4-fullhd">
                    <b-field>
                        <b-input type="text" v-model="form.complement" placeholder="Complemento"></b-input>
                    </b-field>
                </div>

                <div class="column is-variable is-12-mobile is-12-tablet is-6-desktop is-6-widescreen is-6-fullhd">
                    <b-field>
                        <b-input type="text" v-model="form.state" placeholder="Cidade"></b-input>
                    </b-field>
                </div>

                <div class="column is-variable is-12-mobile is-12-tablet is-6-desktop is-6-widescreen is-6-fullhd">
                    <b-field>
                        <b-input type="text" v-model="form.city" placeholder="Estado"></b-input>
                    </b-field>
                </div>

                <div class="column is-variable is-12-mobile is-12-tablet is-12-desktop is-12-widescreen is-12-fullhd text-right">
                    <b-button type="is-info" :disabled="!form.company_name || !form.cnpj || !form.responsible || !form.postal_code || !form.district || !form.street || !form.number || !form.complement || !form.state || !form.city">Proximo <i class="icofont-long-arrow-right"></i></b-button>
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

<style lang="scss">
    .form {
        h2 { color: #434343; }
    }

    @media (min-width: 576px) {}
    @media (min-width: 768px) {}
    @media (min-width: 992px) {}
    @media (min-width: 1200px) {
        .form {
            h2 {
                font-size: 24px;
                font-weight: 700;
            }
        }
    }
</style>
