// Espera o envio do formulário
document.getElementById("loginForm").addEventListener("submit", function(e) {
    e.preventDefault(); // Impede o envio automático

 
    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value;

    const msgErro = document.getElementById("msgErro");
    msgErro.textContent = ""; // Limpa a mensagem anterior

    if (username === "" || password === "") {
        msgErro.textContent = "Por favor, preencha todos os campos.";
        return;
    }

    if (password.length < 8) {
        msgErro.textContent = "A senha deve ter no mínimo 8 caracteres.";
        return;
    }

    
    localStorage.setItem("usuario", username);
    window.location.href = "cad.html";
});