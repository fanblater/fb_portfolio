<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>Laravel</title>
        <link rel="stylesheet" href="{{ asset('css/app.css') }}">


    </head>
    <body >
        <div id="app">
            <div class="container pt-3">
                <header>
                    <nav>
                        <div class="nav-vertical-left">
                            <ul>
                                <li><router-link to="/">Accueil</router-link></li>
                                <li><router-link to="/timeline">Timeline</router-link></li>
                                <li><router-link to="/contact">Contact</router-link></li>
                                <li><router-link to="/quizz">Quizz</router-link></li>
                                <li><router-link to="/login">Log in</router-link></li>
                                <li><router-link to="/register">Register</router-link></li>
                            </ul>
                        </div>
                        <div class="nav-horizontal-right"></div>
                    </nav>
                </header>

            </div>
            <div class="container">
                <router-view></router-view>
            </div>
        </div>
        <script src="{{ asset('js/app.js') }}"></script>
    </body>
</html>
