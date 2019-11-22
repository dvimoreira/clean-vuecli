<template>
    <div>
        <div class="columns is-centered is-vcentered">
            <div class="column is-variable is-12-mobile is-12-tablet is-12-desktop is-12-widescreen is-12-fullhd">
                <h1 class="main-title">Cadastro - <small>Dados de endereço</small></h1>
            </div>
        </div>

        <div class="form">
            <div class="columns is-centered is-vcentered is-multiline">
                <div class="column is-variable is-12-mobile is-12-tablet is-12-desktop is-12-widescreen is-12-fullhd">
                    <b-field>
                        <b-input type="text" v-model="form.cep" placeholder="Informe seu CEP"></b-input>
                    </b-field>
                </div>

                <div class="column is-variable is-12-mobile is-12-tablet is-6-desktop is-6-widescreen is-6-fullhd">
                    <b-field>
                        <b-input type="text" v-model="form.district" placeholder="Bairro"></b-input>
                    </b-field>
                </div>

                <div class="column is-variable is-12-mobile is-12-tablet is-6-desktop is-6-widescreen is-6-fullhd">
                    <b-field>
                        <b-input type="text" v-model="form.street" placeholder="Rua"></b-input>
                    </b-field>
                </div>

                <div class="column is-variable is-12-mobile is-12-tablet is-6-desktop is-6-widescreen is-6-fullhd">
                    <b-field>
                        <b-input type="text" v-model="form.number" placeholder="Número"></b-input>
                    </b-field>
                </div>

                <div class="column is-variable is-12-mobile is-12-tablet is-6-desktop is-6-widescreen is-6-fullhd">
                    <b-field>
                        <b-input type="text" v-model="form.complement" placeholder="Complemento"></b-input>
                    </b-field>
                </div>

                <div class="column is-variable is-12-mobile is-12-tablet is-12-desktop is-12-widescreen is-12-fullhd text-right">
                    <b-button type="is-info" :disabled="!form.cep || !form.district || !form.street || !form.number || !form.complement">Proximo <i class="icofont-long-arrow-right"></i></b-button>
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
        methods: {
            deleteDropFile (index) {
                this.form.avatar.splice(index, 1)
            }
        }
    }
</script>

<style lang="scss">
    .upload-box {
        .upload {
            width: 100%;
            .upload-draggable {
                width: 100%;
                border: 2px dashed rgba(181, 181, 181, 0.623);
                border-radius: 5px;
                .section {
                    padding: 10px 0;
                    .content {
                        p {
                            font-size: 15px;
                            font-weight: 400;
                            margin: 5px 0;
                            color: #434343;
                            span { color: #B951C2; }
                        }
                    }
                }
            }
        }
    }

    @media (min-width: 576px) {}
    @media (min-width: 768px) {}
    @media (min-width: 992px) {}
    @media (min-width: 1200px) {}
</style>
