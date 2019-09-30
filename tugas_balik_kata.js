function balikKata(kata) {
    var katabaru = "";
    for (var i = kata.length - 1; i >= 0; i--) {
        katabaru += kata.substr(i, 1);
    }
    return katabaru;
}
console.log(balikKata("Niomic!"))
console.log(balikKata("JavaScript"))
console.log(balikKata("alohahola"))
console.log(balikKata("Jawa_Barat"))