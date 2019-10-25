/**
 * BD fake!
 * (in memory DB)
 */

var contatos= [
   {
      nome: 'Joao',
      telefone:'(67)99999-9999',
      email: 'joao@email.com',
      dataNascimento:'29/02/2003'
   },
   {
      nome: 'Lucas Negri',
      telefone:'(67)88888-8888',
      email: 'lucas@email.com',
      dataNascimento:'10/08/1971'
   },
   {
      nome: 'Leandro',
      telefone:'(67)77777-7777',
      email: 'leandro@email.com',
      dataNascimento:'19/03/1952'
   },
   {
      nome: 'Lucas Negri',
      telefone:'(67)88888-8888',
      email: 'lucas@email.com',
      dataNascimento:'10/08/1971'
   },
   {
      nome: 'Leandro',
      telefone:'(67)77777-7777',
      email: 'leandro@email.com',
      dataNascimento:'19/03/1952'
   }
   

];
renderizarTabelaContatos();

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

   //Invoca a renderização da tabela
   renderizarTabelaContatos();

}

function renderizarTabelaContatos(){
   if(contatos.length> 0){
      let areaListagemContatos=document.getElementById('listagemContatos')

      /**
       * limpa a area de listagem
       */
      areaListagemContatos.innerHTML='';

      /**
       * Criar Tabela
       */
       let tabela=document.createElement('table');

       let cabecalho=criarCabecalhoTabela();
       
        //Adiciona o Cabeçalho dentro da tabela
        tabela.appendChild(cabecalho);

         let corpoTabela=criarCorpoTabela();
         //Adiciona o corpo da tabela(dados) na tabela
         tabela.appendChild(corpoTabela);

        //Adiciona a tabela na area de listagem
        areaListagemContatos.appendChild(tabela);
   }
}

function criarCabecalhoTabela(){
       /**
        * cria o cabeçalho da tabela
        */
       let cabecalho=document.createElement('thead');
       let linhaCabecalho=document.createElement('tr');
       let colunaNome=document.createElement('th');
       colunaNome.innerText='Nome';
       let colunaTel=document.createElement('th');
       colunaTel.innerText='Telefone';
       let colunaEmail=document.createElement('th');
       colunaEmail.innerText='E-Mail';
       colunaDtaNasc=document.createElement('th');
       colunaDtaNasc.innerText='Data Nascimento';
       //Adiciona as colunas na linha do cabeçalho
       linhaCabecalho.appendChild(colunaNome);
       linhaCabecalho.appendChild(colunaTel);
       linhaCabecalho.appendChild(colunaEmail);
       linhaCabecalho.appendChild(colunaDtaNasc);
       //Adiciona a linha do cabeçalho no cabeçalho
       cabecalho.appendChild(linhaCabecalho);

       //Retorna o cabeçalho criado
       return cabecalho;

}

function criarCorpoTabela(){
   /**
    * Cria Corpo da tabela
    */

    let corpoTabela=document.createElement('tbody');

    /**
     * Cria as Linhas de contatos
     */
    for(let i=0;i<contatos.length;i++){
   /**
   * Cria uma nova linha no corpo da tabela
   */
   let linha= document.createElement('tr');
   let celulaNome=document.createElement('td');
   celulaNome.innerText=contatos[i].nome;
   linha.appendChild(celulaNome);
   let celulaTelefone=document.createElement('td');
   celulaTelefone.innerText=contatos[i].telefone;
   linha.appendChild(celulaTelefone);
   let celulaEmail=document.createElement('td');
   celulaEmail.innerText=contatos[i].email;
   linha.appendChild(celulaEmail);
   let celulaDtaNasc=document.createElement('td');
   celulaDtaNasc.innerText=contatos[i].dataNascimento;
   linha.appendChild(celulaDtaNasc);

    /**
     * Adiciona a nova linha no corpo da tabela
     */
      corpoTabela.appendChild(linha);
    }

    return corpoTabela;
}