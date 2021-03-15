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
        <div>
            <header>
                <div class="container-nav">

                    <div class="nav">
                        <nav>
                                <ul>
                                    <li>
                                        <router-link to="/">Accueil</router-link>
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
                    </div>
                </div>

            </header>

        </div>


<div class="content">
    <router-view></router-view>
</div>
    </div>


    <script src="{{ asset('js/app.js') }}"></script>
</body>

</html>
