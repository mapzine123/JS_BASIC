function onGeoOk(position) {
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
    console.log(lat, lng);
}

function onGeoError() {
    alert("can't find you no weather for you");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);