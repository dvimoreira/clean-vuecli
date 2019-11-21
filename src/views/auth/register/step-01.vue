<template>
    <div>
        <div class="columns is-centered is-vcentered">
            <div class="column is-variable is-12-mobile is-12-tablet is-12-desktop is-12-widescreen is-12-fullhd">
                <h1 class="main-title">Cadastro <small>Selecione um plano</small></h1>
            </div>
        </div>

        <div class="plans-list">
            <div class="columns is-centered is-vcentered">
                <div class="column">
                    <div class="plan-item">
                        <div class="plan-header">
                            <h2>Básico</h2>
                            <span>R$ 59,90</span>
                        </div>

                        <div class="plan-content">
                            <ul>
                                <li>1 Usuário</li>
                                <li>Lembretes de horários SMS/E-mail</li>
                                <li>Programa de Fidelidade</li>
                                <li>Relatórios</li>
                                <li>Gestão Financeira</li>
                            </ul>
                        </div>

                        <div class="plan-footer">
                            <b-button type="is-info">Selecionar</b-button>
                        </div>
                    </div>
                </div>

                <div class="column">
                    <div class="plan-item">
                        <div class="plan-header">
                            <h2>Plus</h2>
                            <span>R$ 99,90</span>
                        </div>

                        <div class="plan-content">
                            <ul>
                                <li>2 à 7 Usuários</li>
                                <li>Lembretes de horários SMS/E-mail</li>
                                <li>Programa de Fidelidade</li>
                                <li>Relatórios</li>
                                <li>Gestão Financeira</li>
                                <li>Pesquisa de Satisfação</li>
                                <li>Gestão de Estoque</li>
                                <li>Gestão de Profissionais</li>
                                <li>Aniversáriantes</li>
                            </ul>
                        </div>

                        <div class="plan-footer">
                            <b-button type="is-info">Selecionar</b-button>
                        </div>
                    </div>
                </div>

                <div class="column">
                    <div class="plan-item">
                        <div class="plan-header">
                            <h2>Vip</h2>
                            <span>R$ 179,90</span>
                        </div>

                        <div class="plan-content">
                            <ul>
                                <li>+ de 8 Usuários</li>
                                <li>Lembretes de horários SMS/E-mail</li>
                                <li>Programa de Fidelidade</li>
                                <li>Relatórios</li>
                                <li>Gestão Financeira</li>
                            </ul>
                        </div>

                        <div class="plan-footer">
                            <b-button type="is-info">Selecionar</b-button>
                        </div>
                    </div>
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
    .plans-list {
        .plan-item {
            .plan-header {
                background: #4656CE;
                background: -moz-linear-gradient(55deg, #4656CE 30%, #B951C2 100%);
                background: -webkit-linear-gradient(55deg, #4656CE 30%, #B951C2 100%);
                background: linear-gradient(55deg, #4656CE 0%, #B951C2 100%);
                filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#3F85ED",endColorstr="#B951C2",GradientType=1);
                h2, span { color: #FFFFFF; }
            }
        }
    }

    @media (min-width: 576px) {}
    @media (min-width: 768px) {}
    @media (min-width: 992px) {}
    @media (min-width: 1200px) {
        .plans-list {
            .plan-item {
                .plan-header {
                    text-align: center;
                    border-radius: 20px 20px 0 0;
                    padding: 10px 0;
                    h2 {
                        font-size: 30px;
                        font-weight: 900;
                        margin: 0;
                        text-transform: uppercase;
                    }
                    span {
                        font-size: 25px;
                        font-weight: 300;
                        margin: 0;
                    }
                }
                .plan-content {
                    padding: 15px;
                    background: #f7f7f7;
                    border-radius: 0 0 20px 20px;
                    ul {
                        padding: 0;
                        margin: 0;
                        text-align: center;
                        li {
                            display: block;
                            list-style: none;
                            border-bottom: 1px solid rgba(202, 202, 202, 0.466);
                            padding: 10px 0;
                            font-size: 14px;
                            &:last-child {
                                padding-bottom: 0;
                                border: none;
                            }
                        }
                    }
                }
                .plan-footer {
                    text-align: center;
                    padding: 15px;
                }
            }
        }
    }
</style>
