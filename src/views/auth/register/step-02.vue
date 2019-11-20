<template>
    <div>
        <div class="columns is-centered is-vcentered">
            <div class="column is-variable is-12-mobile is-12-tablet is-12-desktop is-12-widescreen is-12-fullhd">
                <h1 class="main-title">Cadastro - <small>Dados do Perfil</small></h1>
            </div>
        </div>

        <div class="form">
            <div class="columns is-centered is-vcentered is-multiline">
                <div class="column is-variable is-12-mobile is-12-tablet is-12-desktop is-12-widescreen is-12-fullhd">
                    <div class="upload-box">
                        <b-field>
                            <b-upload v-model="form.avatar"
                                multiple
                                drag-drop>
                                <section class="section">
                                    <div class="content has-text-centered">
                                        <p>
                                            <img src="/img/user.png">
                                        </p>
                                        <p>Imagem de Perfil</p>
                                        <p><span>(Clique aqui ou arraste)</span></p>
                                    </div>
                                </section>
                            </b-upload>
                        </b-field>

                        <div class="tags">
                            <span v-for="(file, index) in form.avatar"
                                :key="index"
                                class="tag is-primary" >
                                {{file.name}}
                                <button class="delete is-small"
                                    type="button"
                                    @click="deleteDropFile(index)">
                                </button>
                            </span>
                        </div>
                    </div>
                </div>

                <div class="column is-variable is-12-mobile is-12-tablet is-6-desktop is-6-widescreen is-6-fullhd">
                    <b-field>
                        <b-input type="text" v-model="form.full_name" placeholder="Nome Completo"></b-input>
                    </b-field>
                </div>

                <div class="column is-variable is-12-mobile is-12-tablet is-6-desktop is-6-widescreen is-6-fullhd">
                    <b-field>
                        <b-input type="text" v-model="form.dt_birth" placeholder="Data de Nascimento"></b-input>
                    </b-field>
                </div>

                <div class="column is-variable is-12-mobile is-12-tablet is-6-desktop is-6-widescreen is-6-fullhd">
                    <b-field>
                        <b-input type="text" v-model="form.fixed_phone" placeholder="Telefone Fixo"></b-input>
                    </b-field>
                </div>

                <div class="column is-variable is-12-mobile is-12-tablet is-6-desktop is-6-widescreen is-6-fullhd">
                    <b-field>
                        <b-input type="text" v-model="form.mobile_phone" placeholder="Telefone Móvel"></b-input>
                    </b-field>
                </div>

                <div class="column is-variable is-12-mobile is-12-tablet is-12-desktop is-12-widescreen is-12-fullhd text-right">
                    <b-button type="is-info" :disabled="!form.full_name || !form.dt_birth || !form.fixed_phone || !form.mobile_phone">Proximo <i class="icofont-long-arrow-right"></i></b-button>
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
