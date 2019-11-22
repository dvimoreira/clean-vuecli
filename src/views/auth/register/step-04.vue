<template>
    <div>
        <div class="columns is-centered is-vcentered">
            <div class="column is-variable is-12-mobile is-12-tablet is-12-desktop is-12-widescreen is-12-fullhd">
                <h1 class="main-title">Cadastro - <small>Documentos</small></h1>
            </div>
        </div>

        <div class="form">
            <div class="columns is-centered is-vcentered is-multiline">
                <div class="column is-variable is-12-mobile is-12-tablet is-4-desktop is-4-widescreen is-4-fullhd">
                    <div class="upload-box">
                        <b-field>
                            <b-upload v-model="form.identity" drag-drop>
                                <section class="section">
                                    <div class="content has-text-centered">
                                        <p>
                                            <img src="/img/user.png">
                                        </p>
                                        <p>RG ou CNH</p>
                                        <p><span>(Clique aqui ou arraste)</span></p>
                                    </div>
                                </section>
                            </b-upload>
                        </b-field>

                        <div class="tags" v-if="form.identity">
                            <span class="tag is-primary" >
                                {{form.identity.name}}
                                <button class="delete is-small"
                                    type="button"
                                    @click="deleteDropFile(index)">
                                </button>
                            </span>
                        </div>
                    </div>
                </div>

                <div class="column is-variable is-12-mobile is-12-tablet is-4-desktop is-4-widescreen is-4-fullhd">
                    <div class="upload-box">
                        <b-field>
                            <b-upload v-model="form.residence" drag-drop>
                                <section class="section">
                                    <div class="content has-text-centered">
                                        <p>
                                            <img src="/img/house.png">
                                        </p>
                                        <p>Comprovante de residência</p>
                                        <p><span>(Clique aqui ou arraste)</span></p>
                                    </div>
                                </section>
                            </b-upload>
                        </b-field>

                        <div class="tags">
                            <span class="tag is-primary" v-if="form.residence">
                                {{form.residence.name}}
                                <button class="delete is-small"
                                    type="button"
                                    @click="deleteDropFile(index)">
                                </button>
                            </span>
                        </div>
                    </div>
                </div>

                <div class="column is-variable is-12-mobile is-12-tablet is-4-desktop is-4-widescreen is-4-fullhd">
                    <div class="upload-box">
                        <b-field>
                            <b-upload v-model="form.criminal" drag-drop>
                                <section class="section">
                                    <div class="content has-text-centered">
                                        <p>
                                            <img src="/img/feedback.png">
                                        </p>
                                        <p>Nada consta criminal</p>
                                        <p><span>(Clique aqui ou arraste)</span></p>
                                    </div>
                                </section>
                            </b-upload>
                        </b-field>

                        <div class="tags">
                            <span class="tag is-primary" v-if="form.criminal">
                                {{form.criminal.name}}
                                <button class="delete is-small"
                                    type="button"
                                    @click="deleteDropFile(index)">
                                </button>
                            </span>
                        </div>
                    </div>
                </div>

                <div class="column is-variable is-12-mobile is-12-tablet is-8-desktop is-8-widescreen is-8-fullhd small-alert">
                    <p>* Nos envie uma cópia de boa qualidade mostrando frente e verso de seu RG ou CNH.</p>
                    <p>* Nos envie uma cópia de boa qualidade do seu comprovante dos últimos 3 meses.</p>
                    <p>* Nos envie uma cópia de boa qualidade do seu documento de Nada Consta Criminal.</p>
                </div>

                <div class="column is-variable is-12-mobile is-12-tablet is-4-desktop is-4-widescreen is-4-fullhd text-right">
                    <b-button type="is-info" :disabled="!form.identity || !form.residence || !form.criminal">Proximo <i class="icofont-long-arrow-right"></i></b-button>
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
    .upload-box {
        .upload {
            width: 100%;
            img {
                max-width: 100px;
                margin: 0 auto;
            }
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
        .tags {position: absolute; }
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
        .upload-box { margin-bottom: 30px; }
    }
</style>
