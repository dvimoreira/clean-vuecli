<template>
    <div>
        <div class="columns is-centered is-vcentered">
            <div class="column is-variable is-12-mobile is-12-tablet is-12-desktop is-12-widescreen is-12-fullhd">
                <h1 class="main-title">Cadastro - <small>Dados do Perfil</small></h1>
            </div>
        </div>

        <div class="form">
            <div class="columns is-centered is-vcentered is-multiline">
                <div class="column is-variable is-12-mobile is-12-tablet is-6-desktop is-6-widescreen is-6-fullhd">
                    <b-field>
                        <b-upload v-model="form.avatar"
                            multiple
                            drag-drop>
                            <section class="section">
                                <div class="content has-text-centered">
                                    <p>
                                        <img src="/img/user.png">
                                    </p>
                                    <p>Drop your files here or click to upload</p>
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
