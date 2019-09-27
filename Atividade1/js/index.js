function verificarPalindromo(){
        let frase1 = document.getElementById('frase1').value;
        var splitString=frase1.split(" ");
        var reverseArray= splitString.reverse();
        var joinArray=reverseArray.join("");
        if(frase1===joinArray){
            return true;
        }



       // return joinArray;
        //frase1=frase1.replace(er,"");

      // for(var i = 0; i < str.length / 2; i++) if (str[i] != str[str.length - i - 1]) return false;

      //  return true;
    //let frase1 = document.getElementById('frase1').value; /* recuperar o nome digitado */
    //let resposta= '';
    //se as variaveis possuem algum valor
   // if(str1 && str2){
           // resposta= `Resultado: ${str1}${str2}`; concatenar
   //        resposta='resposta: ' +str1+str2;
  //  }

    document.getElementById('resultado').innerHTML=joinArray;
    
}
