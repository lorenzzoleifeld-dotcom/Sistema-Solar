const botao = document.querySelector(".btn");
const entrada = document.querySelector(".input");
const lista = document.querySelector(".lista")
botao.addEventListener("click", () => {
    if(entrada.value === "")
        return;
    const novoItem = document.createElement("li");
    novoItem.textContent = entrada.value;
    lista.appendChild(novoItem);
    novoItem.addEventListener("click", () => {
        if(novoItem.classList.contains("estilos")) {
            lista.removeChild(novoItem);
        } else {
            novoItem.classList.add("estilos");
        }
        })
        })
