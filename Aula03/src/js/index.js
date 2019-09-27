/**
 * BD fake!
 * (in memory DB)
 */

 var contatos= [];

 /**
  * cria um apelido para a 
  * função querySelector
  */
 //var sel=document.querySelector; //sel= seletor

 function salvarContato(event){
    // Inibe a recarga da pagina
    event.preventDefault();

    /**
     * $---> document.querySelector
     * val()------> value
     */
    //recupera os valores dos formularios
    let nome=$('#nome').val();
    let telefone=$('#telefone').val();
    let email=$('#email').val();
    let dataNascimento=$('#dataNascimento').val();

    //Criar objeto de contato

    let contato={nome,telefone,email,dataNascimento};

    //adiciona o contato no BD ( no final do vetor-push)
    contatos.push(contato);

    console.log(contatos);

 }