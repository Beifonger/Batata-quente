function gerarAlfabeto(){
    const alfabeto = []
    for (let i = 97; i <= 122; i++) {
    alfabeto.push(String.fromCharCode(i).toUpperCase());
}
return alfabeto;
}
module.exports = gerarAlfabeto;