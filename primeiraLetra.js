const gerarAlfabeto = require("./utilitarios/alfabeto")

function primeiraLetra(){
  let alfabeto = gerarAlfabeto()
  let i = Math.floor(Math.random() * 26)

  return alfabeto[i]
}
module.exports = primeiraLetra;