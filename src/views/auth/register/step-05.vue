<template>
    <div>
        <div class="columns is-centered is-vcentered is-multiline">
            <div class="column is-variable is-12-mobile is-12-tablet is-12-desktop is-12-widescreen is-12-fullhd">
                <h1 class="main-title">Cadastro - <small>Cadastro de veículos</small></h1>
            </div>
        </div>

        <div class="columns is-centered is-vcentered">
            <div class="column is-variable is-12-mobile is-12-tablet is-3-desktop is-3-widescreen is-3-fullhd">
                <div class="radio-box">
                    <b-field>
                        <b-radio-button v-model="form.radio" native-value="bike" class="big-radio">
                            <img src="/img/bicycle.png">
                            <p>Bicicleta</p>
                        </b-radio-button>
                    </b-field>
                </div>
            </div>

            <div class="column is-variable is-12-mobile is-12-tablet is-3-desktop is-3-widescreen is-3-fullhd">
                <div class="radio-box">
                    <b-field>
                        <b-radio-button v-model="form.radio" native-value="moto" class="big-radio">
                            <img src="/img/scooter.png">
                            <p>Moto</p>
                        </b-radio-button>
                    </b-field>
                </div>
            </div>

            <div class="column is-variable is-12-mobile is-12-tablet is-3-desktop is-3-widescreen is-3-fullhd">
                <div class="radio-box">
                    <b-field>
                        <b-radio-button v-model="form.radio" native-value="carro" class="big-radio">
                            <img src="/img/car.png">
                            <p>Carro</p>
                        </b-radio-button>
                    </b-field>
                </div>
            </div>

            <div class="column is-variable is-12-mobile is-12-tablet is-3-desktop is-3-widescreen is-3-fullhd">
                <div class="radio-box">
                    <b-field>
                        <b-radio-button v-model="form.radio" native-value="caminhao" class="big-radio">
                            <img src="/img/truck.png">
                            <p>Caminhão</p>
                        </b-radio-button>
                    </b-field>
                </div>
            </div>
        </div>

        <div class="columns is-centered is-vcentered is-multiline">
            <div class="column is-variable is-12-mobile is-12-tablet is-8-desktop is-8-widescreen is-8-fullhd small-alert">
                <p>* Selecione o meio de locomoção que utilizará para as entregas.<br>
                Não se preocupe, você poderá escolher outro depois.</p>
            </div>

            <div class="column is-variable is-12-mobile is-12-tablet is-4-desktop is-4-widescreen is-4-fullhd text-right">
                <b-button type="is-info" :disabled="!form.radio">Proximo <i class="icofont-long-arrow-right"></i></b-button>
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
    .radio-box {
        .big-radio {
            .radio {
                &.button {
                    height: inherit;
                    display: block;
                    border: 2px dashed rgba(181, 181, 181, 0.623);
                    border-radius: 5px;
                    img {
                        max-width: 100px;
                        margin: 0 auto 10px;
                        display: block;
                    }
                    p {
                        display: block;
                        text-transform: initial;
                    }
                }
                &.is-primary {
                    background: #8454C8;
                    border: none;
                }
                &.is-focused {
                    img { filter: invert(100%); }
                }
            }
        }
    }

    .small-alert {
        p {
            margin: 0;
            font-size: 14px;
            font-weight: 400;
            color: #AFAFAF;
        }
    }

    @media (min-width: 576px) {}
    @media (min-width: 768px) {}
    @media (min-width: 992px) {}
    @media (min-width: 1200px) {
        .radio-box {
            margin-bottom: 30px;
            .big-radio {
                .radio {
                    &.button {
                        padding: 20px;
                    }
                }
            }
        }
    }
</style>
