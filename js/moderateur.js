function moderer() {
    var textElement = document.getElementById("text");
    var resultatElement = document.getElementById("resultat");
    var text = textElement.value;

    text = text.replace(/[:;xX=][\(\)\-\\/'OpD@]+/g, "--");

    resultatElement.innerHTML = text;
}
