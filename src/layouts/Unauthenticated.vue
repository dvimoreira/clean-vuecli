<template>
    <div>
        <div class="container">
            <div class="columns is-centered is-vcentered">
                <div class="column is-variable is-12-mobile is-12-tablet is-10-desktop is-10-widescreen is-10-fullhd">
                    <div class="custom-card">
                        <transition name="slide-fade" mode="out-in">
                            <router-view></router-view>
                        </transition>
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
        background: #4656CE;
        background: -moz-linear-gradient(55deg, #4656CE 30%, #B951C2 100%);
        background: -webkit-linear-gradient(55deg, #4656CE 30%, #B951C2 100%);
        background: linear-gradient(55deg, #4656CE 0%, #B951C2 100%);
        filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#3F85ED",endColorstr="#B951C2",GradientType=1);
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

    .login-title { color: #434343; }
    .main-title { color: #434343; }

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

    .slide-fade-enter-active {
        transition: all .3s ease;
    }
    .slide-fade-leave-active {
        transition: all .3s cubic-bezier(1.0, 0.5, 0.8, 1.0);
    }
    .slide-fade-enter, .slide-fade-leave-to {
        transform: translateX(10px);
        opacity: 0;
    }

    .tag:not(body).is-primary {
        background-color: #B951C2;
    }

    @media (min-width: 576px) {}
    @media (min-width: 768px) {}
    @media (min-width: 992px) {}
    @media (min-width: 1200px) {
        .custom-card { padding: 30px; }

        .login-title {
            font-size: 30px;
            font-weight: 900;
            margin: 0 0 30px 0;
        }

        .main-title {
            font-size: 30px;
            font-weight: 900;
            margin: 0;
            small {
                font-size: 20px;
                font-weight: 400;
                opacity: 0.7;
            }
        }

        .form {
            .input {
                border: none;
                border-radius: 50px;
                height: 40px;
                padding: 0 15px;
                &:focus { box-shadow: none; }
            }
        }

        .button {
            border-radius: 50px;
            height: 50px;
            font-size: 18px;
            font-weight: 500;
            -webkit-transition: all 0.3s;
            transition: all 0.3s;
            padding: 0 30px;
            &.full-btn { width: 100%; }
        }
    }
</style>
