
var x = 5;
x = 'teksti';

console.log(x);

document.getElementById('print').innerHTML = x;

var henkilo = {
    nimi: 'Nimmari',
    ika: 45
};

var tulosta = function () {
    console.log(henkilo);
    //document.getElementById('print').innerHTML = henkilo;
};

var jotain = function (kukkuu) {
    kukkuu();
    return 100;
};

console.log(jotain(tulosta));