<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Laravel</title>
    <link rel="stylesheet" href="{{ asset('css/app.css') }}">


</head>

<body>
    <div id="app">
        <div class="container-fluid h-100">
            <div class="row">
                <div class="col-sm-12">
                    <router-link to="/"><img class="logo" src="{{asset('img/logo_fb_v1.svg')}}" alt="logo"></router-link>

                </div>
            </div>

            <div class="row justify-content-center align-items-center h-100">
                <div class="col-sm-10">
                    <div class="container">
                        <router-view></router-view>
                    </div>
                </div>
                <div class="col-sm-2">
                    <header>

                                <nav>
                                    <ul>
                                        <li>

                                        </li>
                                        <li>
                                            <router-link to="/timeline">Timeline</router-link>
                                        </li>
                                        <li>
                                            <router-link to="/contact">Contact</router-link>
                                        </li>
                                        <li>
                                            <router-link to="/quizz">Quizz</router-link>
                                        </li>
                                        <li>
                                            <router-link to="/login">Log in</router-link>
                                        </li>
                                        {{-- <li>
                                                            <router-link to="/register">Register</router-link>
                                                        </li> --}}
                                        <li><a href="www.linkedin.com/in/fanny-bellais">Linkdin</a></li>
                                        <li><a href="https://github.com/fanblater">Github</a></li>
                                    </ul>

                                </nav>

                    </header>
                </div>
            </div>
        </div>




    </div>


    <script src="{{ asset('js/app.js') }}"></script>
</body>

</html>
