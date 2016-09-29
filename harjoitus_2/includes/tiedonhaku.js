

function teehaku(){
    var urli = "http://home.tamk.fi/~kujesa/webjatko/rest/index.php/employees";
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById('tiedonhaku').innerHTML = this.responseText;
        }
    };
    xhttp.open('GET', urli, true);
    xhttp.send();
}