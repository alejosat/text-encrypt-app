document.addEventListener('DOMContentLoaded', () => {
    const loginSection = document.getElementById('login');
    const appSection = document.getElementById('app');
    const passwordInput = document.getElementById('passwordInput');
    const loginBtn = document.getElementById('loginBtn');
    const registerBtn = document.getElementById('registerBtn');

    const inputText = document.getElementById('inputText');
    const outputText = document.getElementById('outputText');
    const encryptBtn = document.getElementById('encryptBtn');
    const decryptBtn = document.getElementById('decryptBtn');
    const copyBtn = document.getElementById('copyBtn');
    const historyList = document.getElementById('historyList');
    const clearHistoryBtn = document.getElementById('clearHistoryBtn');

    // Eventos de login y registro
    loginBtn.addEventListener('click', () => handleLogin(passwordInput, loginSection, appSection));
    registerBtn.addEventListener('click', () => handleRegister(passwordInput));
    checkAuthentication(loginSection);

    // Manejo de encriptar, desencriptar y copiar
    encryptBtn.addEventListener('click', () => {
        const text = inputText.value;
        if (text && validateText(text)) {
            const encryptedText = encryptText(text);
            outputText.value = encryptedText;
            updateHistory('Encriptado', encryptedText);
            inputText.value = '';
            Swal.fire('Texto Encriptado', 'El texto ha sido encriptado correctamente.', 'success');
        } else {
            Swal.fire('Error', 'El texto debe contener solo letras minúsculas y sin acentos.', 'error');
        }
    });

    decryptBtn.addEventListener('click', () => {
        const text = inputText.value;
        if (text && validateText(text)) {
            const decryptedText = decryptText(text);
            outputText.value = decryptedText;
            updateHistory('Desencriptado', decryptedText);
            inputText.value = '';
            Swal.fire('Texto Desencriptado', 'El texto ha sido desencriptado correctamente.', 'success');
        } else {
            Swal.fire('Error', 'El texto debe contener solo letras minúsculas y sin acentos.', 'error');
        }
    });

    copyBtn.addEventListener('click', () => {
        if (outputText.value) {
            outputText.select();
            document.execCommand('copy');
            Swal.fire('Texto Copiado', 'El texto ha sido copiado al portapapeles.', 'success');
        } else {
            Swal.fire('Error', 'No hay texto para copiar.', 'error');
        }
    });

    clearHistoryBtn.addEventListener('click', clearHistory);
});
