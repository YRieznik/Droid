function initMap() {
    var ubisoft = {lat: 50.463415, lng: 30.451203};
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 18,
        center: ubisoft,
        scrollwheel: false //turn off scroll to zoom feature
    });
    var marker = new google.maps.Marker({
        position: ubisoft,
        map: map
    });
    //Resize Function
    google.maps.event.addDomListener(window, "resize", function() {
        var center = map.getCenter();
        google.maps.event.trigger(map, "resize");
        map.setCenter(center);
    });
}
