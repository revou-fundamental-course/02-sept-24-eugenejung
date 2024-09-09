function calculate(type) {
    var hasil = 0;
    if (type == "keliling") {
        let s1 = document.getElementById("s1").value;
        let s2 = document.getElementById("s2").value
        let s3 = document.getElementById("s3").value
        hasil = parseInt(s1) + parseInt(s2) + parseInt(s3);
    }
    else {
        let alas = document.getElementById("alas").value;
        let tinggi = document.getElementById("tinggi").value;
        hasil = parseInt(alas) * parseInt(tinggi) / 2;
    }
    document.getElementById("hasil_" + type).innerHTML = "Hasil = " + hasil;
}
function reset(type) {
    if (type == "keliling") {
        document.getElementById("s1").value = "";
        document.getElementById("s2").value = "";
        document.getElementById("s3").value = "";
    }
    else {
        document.getElementById("alas").value = "";
        document.getElementById("tinggi").value = "";
    }
    document.getElementById("hasil_" + type).innerHTML = "";
}