const rl = require("./utilitarios/rl.js")
const perguntar = require("./utilitarios/perguntar.js")
const { Console } = require("console")

async function menuPrincipal(){
    console.log(`==== Menu Principal ====
    
    1 - jogar
    2 - sair
    `)

    inputMenuPrincipal = await perguntar("Resposta: ")
    iMP = parseInt(inputMenuPrincipal)
    
    if(!inputMenuPrincipal || isNaN(inputMenuPrincipal)){
        console.log("Resposta invalida!")
    }
    switch(iMP){
        case 1: jogar(); break;
        case 2: console.log("Saindo..."); rl.close(); break;
        default: console.log(`A resposta: ${inputMenuPrincipal} é invalida!`); return menuPrincipal()
    }

}