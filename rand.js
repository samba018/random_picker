function pic() {
    var x = parseInt(document.getElementsByClassName("a1")[0].value);
    var y = parseInt(document.getElementsByClassName("a2")[0].value);
    var ran = Math.floor(Math.random() * (y - x + 1)) + x;
    document.getElementsByClassName("output")[0].value = ran;
}
