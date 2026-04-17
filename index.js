const botao = document.querySelector(".btn");
const entrada = document.querySelector(".input");
const lista = document.getElementById("lista")
botao.addEventListener("click", () => {
    if(entrada.value === "")
        return;
    const novoItem = document.createElement("li"); alert("Você criou um novo elemento")
    novoItem.textContent = entrada.value;
    lista.appendChild(novoItem);
    novoItem.addEventListener("click", () => {
        if(novoItem.classList.contains("estilos")) {
            lista.removeChild(novoItem);
            alert("Você removeu seu novo elemento!")
        } else {
            novoItem.classList.add("estilos");
        }
    })
})