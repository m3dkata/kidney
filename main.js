$(function () {

    $('img').click(function () {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(displayLocationInfo);
        }

        function displayLocationInfo(position) {
            const lng = position.coords.longitude;
            const lat = position.coords.latitude;

            $('img').attr('src', 'loading.svg');

            $.getJSON('/get?lg=' + lng + '&lt=' + lat, function (data) {
                $('img').attr('src', '/img/geo.svg');

                $('span', 'h2').text(data.location);
                $('#Fajr').html('<span>' + data.times.Fajr.replace(' ', '</span>'));
                $('#Sunrise').html('<span>' + data.times.Sunrise.replace(' ', '</span>'));
                $('#Dhuhr').html('<span>' + data.times.Dhuhr.replace(' ', '</span>'));
                $('#Asr').html('<span>' + data.times.Asr.replace(' ', '</span>'));
                $('#Maghrib').html('<span>' + data.times.Maghrib.replace(' ', '</span>'));
                $('#Isha').html('<span>' + data.times.Isha.replace(' ', '</span>'));
                $('#Qiyam').html('<span>' + data.times.Qiyam.replace(' ', '</span>'));
            });
        }
    });
});