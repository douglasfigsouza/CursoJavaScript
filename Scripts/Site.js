//teste
function imc() {
    var form = document.getElementById("formulario");
    var kg = form.kilos.value;
    var mt = form.metros.value;
    var cm = +form.cm.value;
    var altura = ((mt * 100) + cm) / 100;

    var imc = kg / (altura * altura);
    document.getElementById('resultado').textContent = imc;
}