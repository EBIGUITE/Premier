function appendToResult(value: string) {
    const resultInput = document.getElementById('result') as HTMLInputElement;
    resultInput.value += value;
}

function clearResult() {
    const resultInput = document.getElementById('result') as HTMLInputElement;
    resultInput.value = '';
}

function calculateResult() {
    const resultInput = document.getElementById('result') as HTMLInputElement;
    try {
        resultInput.value = eval(resultInput.value).toString();
    } catch (e) {
        resultInput.value = 'Erreur';
    }
}