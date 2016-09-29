

var clock = setInterval(function() {currentTime()},1000);
var paivat = [
    'Maanantai',
    'Tiistai',
    'Keskiviikko',
    'Torstai',
    'Perjantai',
    'Lauantai',
    'Sunnuntai'
];
function currentTime() {
    var time = new Date();
    var d = paivat[time.getDay()];
    var date = time.toLocaleString();
    document.getElementById('clock').innerHTML = d + " " + date;
}

