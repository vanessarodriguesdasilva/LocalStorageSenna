function enviar(){
    let botao = document.getElementById('Number').value

    localStorage.setItem('Numero', botao);
    localStorage.getItem("Numero")

}


