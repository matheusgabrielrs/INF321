var carrinho = 0;
const botao_compra = document.querySelectorAll(".botao-compra");
const qtd = document.querySelector("#qtd_itens");
botao_compra.forEach((b) =>{
    b.addEventListener("click", () => {
    const msg = document.querySelector("#msg-compra");
    msg.textContent = "Produto adicionado ao carrinho!";
    qtd.textContent = ++carrinho;
    document.querySelector("#container-msg").classList.add("add-carrinho")
    setTimeout(()=>{
        msg.textContent = "";
        document.querySelector("#container-msg").classList.remove("add-carrinho")
    }, 2000)
})

})


const botao_busca = document.querySelector("#buscar");
botao_busca.addEventListener("click", () => {

    const termo = document.querySelector("#barra").value.toLowerCase();
    const lista_produtos = document.querySelectorAll(".nome_produto");

    lista_produtos.forEach((p) => {
        const card = p.closest(".card");

        if (p.textContent.toLowerCase().includes(termo)) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    });
});


const formulario = document.querySelector("#formulario");
formulario.addEventListener(
    "submit",
    function (event) {
        const lista_ocultos = document.querySelectorAll(".oculto");
        lista_ocultos.forEach((p) => {
            p.classList.remove("erro");
        });

        if (document.querySelector("#nome").value === "") {
            event.preventDefault();
            document.querySelector("#nome").nextElementSibling.classList.add("erro");
        }
        if (document.querySelector("#email").value === "") {
            event.preventDefault();
            document.querySelector("#email").nextElementSibling.classList.add("erro");
           
        }
        if (document.querySelector("#msg").value === "") {
            event.preventDefault();
            document.querySelector("#msg").nextElementSibling.classList.add("erro");
        }
    }
);


