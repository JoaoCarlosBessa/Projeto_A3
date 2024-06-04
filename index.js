const aeroporto_or = document.getElementById("aeroporto_or");
const aeroporto_ds= document.getElementById("aeroporto_ds");
const lista= document.getElementById("lista");
const reservaBtn= document.getElementById("reservaBtn")

document.getElementById("buscaBtn").addEventListener("click", function(event){
    event.preventDefault();
    confere();
});

function confere(){
    const aeroporto_orValue = aeroporto_or.value;
    const aeroporto_dsValue = aeroporto_ds.value;

    if (aeroporto_orValue === "Galeão" || "Guarulhos" || "Brasília"
     && aeroporto_dsValue === "Galeão" || "Guarulhos" || "Brasília" ){
        lista.style.display = "inline-block";
        reservaBtn.style.display = "inline-block";
    }
    if (aeroporto_orValue === "selecionar" ||  aeroporto_dsValue === "selecionar"){
        lista.style.display = "none";
        reservaBtn.style.display = "none";
    }
}                                   