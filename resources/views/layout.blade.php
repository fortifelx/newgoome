
<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="robots" content="noindex" />
    <title>GOOME.RU</title>

    <link rel="stylesheet" href="{{ asset('assets/css/bootstrap3.min.css') }}">
    <link rel="stylesheet" href="{{ asset('assets/css/slick.css') }}">
    <link rel="stylesheet" href="{{ asset('assets/css/reset.css') }}">
    <link rel="stylesheet" href="{{ asset('assets/css/style.css') }}">
</head>

<body>
<div class="main_wrapper">

    @include('parts._navmenu')

    @yield('content')

    @include('parts._wishes')

    @include('parts._basket')

    @include('parts._footer')


</div>
{{--<script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDlz1gozgsvPS259RrE2I7HkbwEsK3f9HY&callback=initMap" async defer></script>--}}
<script src="https://unpkg.com/axios/dist/axios.min.js"></script>
<script src="{{ asset('assets/js/main.js') }}"></script>



</body>
</html>