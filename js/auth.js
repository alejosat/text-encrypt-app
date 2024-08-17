function handleLogin(passwordInput, loginSection, appSection) {
    const savedPassword = localStorage.getItem('password');
    const inputPassword = passwordInput.value;

    if (savedPassword && inputPassword === savedPassword) {
        loginSection.style.display = 'none';
        appSection.style.display = 'block';
        Swal.fire('Acceso Concedido', 'Has ingresado correctamente.', 'success');
        loadHistory();
    } else {
        Swal.fire('Error', 'Contraseña incorrecta.', 'error');
    }
}

function handleRegister(passwordInput) {
    const password = passwordInput.value;
    if (password) {
        localStorage.setItem('password', password);
        Swal.fire('Registrado', 'Contraseña registrada correctamente.', 'success');
        passwordInput.value = '';
    } else {
        Swal.fire('Error', 'Debes ingresar una contraseña.', 'error');
    }
}

function checkAuthentication(loginSection) {
    if (localStorage.getItem('password')) {
        loginSection.style.display = 'block';
    } else {
        Swal.fire('Bienvenido', 'Por favor, regístrate para usar el encriptador.', 'info');
        loginSection.style.display = 'block';
    }
}
