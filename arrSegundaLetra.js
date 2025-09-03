const primeiraLetra = require("./primeiraLetra.js")
const alfabeto = require("./utilitarios/alfabeto.js")

function arrSegundaLetra(){

    let pL = primeiraLetra()
    let arraySegundaLetra = []

    if (pL === "A") {
        let arr = ["B","C","D","F","G","H","J","L","M","N","P","Q","R","S","T","V","X","Z"];
        arraySegundaLetra.push(arr);
      }

      if (pL === "B") {
        let arr = ["A","E","I","O","U","L","R"];
        arraySegundaLetra.push(arr);
      }
      
      if (pL === "C") {
        let arr = ["A","E","I","O","U","H","L","R","T"];
        arraySegundaLetra.push(arr);
      }
      
      if (pL === "D") {
        let arr = ["A","E","I","O","U","R"];
        arraySegundaLetra.push(arr);
      }
      
      if (pL === "E") {
        let arr = ["B","C","D","F","G","H","J","L","M","N","P","Q","R","S","T","V","X","Z"];
        arraySegundaLetra.push(arr);
      }
      
      if (pL === "F") {
        let arr = ["A","E","I","O","U","L","R"];
        arraySegundaLetra.push(arr);
      }
      
      if (pL === "G") {
        let arr = ["A","E","I","O","U","L","R"];
        arraySegundaLetra.push(arr);
      }
      
      if (pL === "H") {
        let arr = ["A","E","I","O","U"];
        arraySegundaLetra.push(arr);
      }
      
      if (pL === "I") {
        let arr = ["B","C","D","F","G","H","J","L","M","N","P","Q","R","S","T","V","X","Z"];
        arraySegundaLetra.push(arr);
      }
      
      if (pL === "J") {
        let arr = ["A","E","I","O","U"];
        arraySegundaLetra.push(arr);
      }
      
      if (pL === "K") {
        let arr = ["A","E","I","O","U"];
        arraySegundaLetra.push(arr);
      }
      
      if (pL === "L") {
        let arr = ["A","E","I","O","U","H"];
        arraySegundaLetra.push(arr);
      }
      
      if (pL === "M") {
        let arr = ["A","E","I","O","U"];
        arraySegundaLetra.push(arr);
      }
      
      if (pL === "N") {
        let arr = ["A","E","I","O","U","H"];
        arraySegundaLetra.push(arr);
      }
      
      if (pL === "O") {
        let arr = ["B","C","D","F","G","H","J","L","M","N","P","Q","R","S","T","V","X","Z"];
        arraySegundaLetra.push(arr);
      }
      
      if (pL === "P") {
        let arr = ["A","E","I","O","U","L","R"];
        arraySegundaLetra.push(arr);
      }
      
      if (pL === "Q") {
        let arr = ["U"];
        arraySegundaLetra.push(arr);
      }
      
      if (pL === "R") {
        let arr = ["A","E","I","O","U"];
        arraySegundaLetra.push(arr);
      }
      
      if (pL === "S") {
        let arr = ["A","E","I","O","U","C","T","P"];
        arraySegundaLetra.push(arr);
      }
      
      if (pL === "T") {
        let arr = ["A","E","I","O","U","R"];
        arraySegundaLetra.push(arr);
      }
      
      if (pL === "U") {
        let arr = ["B","C","D","F","G","H","J","L","M","N","P","Q","R","S","T","V","X","Z"];
        arraySegundaLetra.push(arr);
      }
      
      if (pL === "V") {
        let arr = ["A","E","I","O","U"];
        arraySegundaLetra.push(arr);
      }
      
      if (pL === "W") {
        let arr = ["A","E","I","O","U"];
        arraySegundaLetra.push(arr);
      }
      
      if (pL === "X") {
        let arr = ["A","E","I","O","U"];
        arraySegundaLetra.push(arr);
      }
      
      if (pL === "Y") {
        let arr = ["A","E","I","O","U"];
        arraySegundaLetra.push(arr);
      }
      
      if (pL === "Z") {
        let arr = ["A","E","I","O","U"];
        arraySegundaLetra.push(arr);
      }

      let s = Math.floor(Math.random() * arraySegundaLetra.length)
      return arraySegundaLetra;
}

module.exports = arrSegundaLetra;