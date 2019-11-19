<template>
  <div>
      <a href="javascript:;" @click="logout()">Sair</a>
  </div>
</template>

<script>
    export default {
        name: 'authenticated',
        components: {},
        data () {
            return {}
        },
        computed: {
            authenticated () {
                return this.$store.state.authenticated || false
            },

            /**
             * Pegando os dados do usuário
             */
            user () {
                return this.$store.state.user
            }
        },
        methods: {
            logout () {
                this.$store.dispatch('logout')
                this.$router.push({ name: 'home' })
            }
        }
    }
</script>

<style lang="scss"></style>
