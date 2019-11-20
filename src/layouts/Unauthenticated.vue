<template>
    <div>
        <div class="container">
            <div class="columns is-centered is-vcentered">
                <div class="column is-variable is-12-mobile is-12-tablet is-10-desktop is-10-widescreen is-10-fullhd">
                    <div class="custom-card">
                        <router-view></router-view>
                    </div>
                </div>
            </div>
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
        display: grid;
        align-items: center;
        height: 100%;
    }

    body {
        font-family: 'Roboto', sans-serif;
    }

    .text-center { text-align: center; }
    .text-left { text-align: left; }
    .text-right { text-align: right; }

    .custom-card {
        background: #ffffff;
        border-radius: 25px;
    }

    .main-title { color: #000000; }

    .form {
        .input { background: #E5E4E4; }
    }

    .button {
        text-transform: uppercase;
        &.is-info {
            background-color: #4656CE;
            &:hover {
                opacity: 0.7;
                background-color: #4656CE;
            }
        }
    }

    @media (min-width: 576px) {}
    @media (min-width: 768px) {}
    @media (min-width: 992px) {}
    @media (min-width: 1200px) {
        .custom-card { padding: 80px 40px; }

        .main-title {
            font-size: 30px;
            font-weight: 900;
            margin: 0 0 30px 0;
        }

        .form {
            .input {
                border: none;
                border-radius: 50px;
                height: 50px;
                padding: 0 15px;
                &:focus { box-shadow: none; }
            }
        }

        .button {
            border-radius: 50px;
            width: 100%;
            height: 50px;
            font-size: 20px;
            font-weight: 700;
            -webkit-transition: all 0.3s;
            transition: all 0.3s;
        }
    }
</style>
