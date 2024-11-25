function appendToResult(value) {
    var resultInput = document.getElementById('result');
    resultInput.value += value;
}
function clearResult() {
    var resultInput = document.getElementById('result');
    resultInput.value = '';
}
function calculateResult() {
    var resultInput = document.getElementById('result');
    try {
        resultInput.value = eval(resultInput.value).toString();
    }
    catch (e) {
        resultInput.value = 'Erreur';
    }
}
