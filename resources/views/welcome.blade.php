<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Laravel</title>
    <link rel="stylesheet" href="{{ asset('css/app.css') }}">
    <script src="https://cdn.jsdelivr.net/npm/vue"></script>
    <script src="https://cdn.jsdelivr.net/npm/three"></script>
    <script src="https://cdn.jsdelivr.net/npm/vue-gl"></script>

</head>

<body>
    <div id="app">
        <div id="wave" ></div>
        <div class="container-fluid h-100">
            <div class="row">
                <div class="col-sm-12">
                    <router-link to="/"><img class="logo" src="{{asset('img/logo_fb_v1.svg')}}" alt="logo">
                    </router-link>

                </div>
            </div>

            <div class="row justify-content-center align-items-center h-100">
                <div class="col-sm-10 home-content">

                        <transition name="slide" mode="out-in">
                            <router-view class="view"></router-view>
                        </transition>


                </div>
                <div class="col-sm-2">
                    <header>

                        <nav>
                            <ul class="nav-rounded">
                                <li>
                                    <router-link to="/timeline">Timeline</router-link>
                                </li>
                                <li>
                                    <router-link to="/quizz">Quizz</router-link>
                                </li>
                                <li>
                                    <router-link to="/contact">Contact</router-link>
                                </li>


                                {{--
                                            <li>
                                                <router-link to="/login">Log in</router-link>
                                            </li>
                                            <li>
                                                            <router-link to="/register">Register</router-link>
                                                        </li> --}}
                                <li><a target="blank" href="https://linkedin.com/in/fanny-bellais">
                                    <logo-linkedin-icon/></a></li>
                                <li><a target="blank" href="https://github.com/fanblater"><logo-github-icon/></a></li>
                            </ul>

                        </nav>

                    </header>
                </div>
            </div>
        </div>
    </div>
    </div>

    <script src="{{ asset('js/app.js') }}"></script>

</body>

</html>
