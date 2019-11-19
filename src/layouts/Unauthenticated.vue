<template>
    <div>
        <div class="custom-card">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
    export default {
        data () {
            return {}
        }
    }
</script>

<style lang="scss">
    html {
        background: rgb(199,80,192);
        background: -moz-linear-gradient(55deg, rgba(199,80,192,1) 30%, rgba(67,87,207,1) 100%);
        background: -webkit-linear-gradient(55deg, rgba(199,80,192,1) 30%, rgba(67,87,207,1) 100%);
        background: linear-gradient(55deg, rgba(199,80,192,1) 30%, rgba(67,87,207,1) 100%);
        filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#c750c0",endColorstr="#4357cf",GradientType=1);
    }

    body {
        font-family: 'Roboto', sans-serif;
    }

    @media (min-width: 576px) {}
    @media (min-width: 768px) {}
    @media (min-width: 992px) {}
    @media (min-width: 1200px) {}
</style>
