<p align="center">
  <img src=https://camo.githubusercontent.com/d25397e9df01fe7882dcc1cbc96bdf052ffd7d0c/68747470733a2f2f73746f726167652e676f6f676c65617069732e636f6d2f676f6c64656e2d77696e642f626f6f7463616d702d676f737461636b2f6865616465722d6465736166696f732e706e67>
</p>

<center><h1><strong>Projeto Node.js com TypeScript</strong></h1></center>

<p align="center">
  <img src="https://img.shields.io/badge/tech-Back--end-brown">
  <img src="https://img.shields.io/badge/framework-NodeJS-green">
  <img src="https://img.shields.io/badge/framework-TypeScript-blue">
  <img src="https://img.shields.io/badge/source-Rocketseat-blueviolet">
</p>


<p> API em Node.js junto ao TypeScript, utilizando o conceito de models, repositories e services! </a></p>


<center><h2>Funcionalidades da aplicação</h2></center>
<p>
Essa será uma aplicação para armazenar transações financeiras de entrada e saída, que deve permitir o cadastro e a listagem dessas transações.<p>
<ul>
    <li><strong>POST /transactions:</strong> A rota deve receber title, value e type dentro do corpo da requisição, sendo type o tipo da transação, que deve ser income para entradas (depósitos) e outcome para saídas (retiradas). Ao cadastrar uma nova transação, ela deve ser armazenada dentro de um objeto com o seguinte formato:
    <div ><pre>{
      <span ><span >"</span>id<span >"</span></span>: <span ><span >"</span>uuid<span >"</span></span>,
      <span ><span >"</span>title<span >"</span></span>: <span ><span >"</span>Salário<span >"</span></span>,
      <span ><span >"</span>value<span >"</span></span>: <span >3000</span>,
      <span ><span >"</span>type<span >"</span></span>: <span ><span >"</span>income<span >"</span></span>
    }</pre></div>
    </li>
    <li><strong>GET /transactions:</strong> Essa rota deve retornar uma listagem com todas as transações que você cadastrou até agora, junto com o valor de soma de entradas, retiradas e total de crédito. Essa rota deve retornar um objeto com o formato a seguir:
    <div ><pre>{
  <span ><span >"</span>transactions<span >"</span></span>: [
    {
      <span ><span >"</span>id<span >"</span></span>: <span ><span >"</span>uuid<span >"</span></span>,
      <span ><span >"</span>title<span >"</span></span>: <span ><span >"</span>Salário<span >"</span></span>,
      <span ><span >"</span>value<span >"</span></span>: <span >4000</span>,
      <span ><span >"</span>type<span >"</span></span>: <span ><span >"</span>income<span >"</span></span>
    },
    {
      <span ><span >"</span>id<span >"</span></span>: <span ><span >"</span>uuid<span >"</span></span>,
      <span ><span >"</span>title<span >"</span></span>: <span ><span >"</span>Freela<span >"</span></span>,
      <span ><span >"</span>value<span >"</span></span>: <span >2000</span>,
      <span ><span >"</span>type<span >"</span></span>: <span ><span >"</span>income<span >"</span></span>
    },
    {
      <span ><span >"</span>id<span >"</span></span>: <span ><span >"</span>uuid<span >"</span></span>,
      <span ><span >"</span>title<span >"</span></span>: <span ><span >"</span>Pagamento da fatura<span >"</span></span>,
      <span ><span >"</span>value<span >"</span></span>: <span >4000</span>,
      <span ><span >"</span>type<span >"</span></span>: <span ><span >"</span>outcome<span >"</span></span>
    },
    {
      <span ><span >"</span>id<span >"</span></span>: <span ><span >"</span>uuid<span >"</span></span>,
      <span ><span >"</span>title<span >"</span></span>: <span ><span >"</span>Cadeira Gamer<span >"</span></span>,
      <span ><span >"</span>value<span >"</span></span>: <span >1200</span>,
      <span ><span >"</span>type<span >"</span></span>: <span ><span >"</span>outcome<span >"</span></span>
    }
  ],
  <span ></span>balance<span >"</span></span>: {
    <span ></span>income<span >"</span></span>: <span >6000</span>,
    <span ></span>outcome<span >"</span></span>: <span >5200</span>,
    <span ></span>total<span >"</span></span>: <span >800</span>
  }
}</pre></div>
    </li>
</ul>

<center><h2>Específicação dos testes</h2></center>
<p>Para esse desafio temos os seguintes testes:<p>
<ul>
    <li><strong>should be able to create a new transaction:</strong> Para que esse teste passe, sua aplicação deve permitir que uma transação seja criada, e retorne um json com a transação criada.</li>
    <li><strong>should be able to list the transactions:</strong> Para que esse teste passe, sua aplicação deve permitir que seja retornado um objeto contendo todas as transações junto ao balanço de income, outcome e total das transações que foram criadas até o momento.</li>
    <li><strong>should not be able to create outcome transaction without a valid balance:</strong> Para que esse teste passe, sua aplicação não deve permitir que uma transação do tipo outcome extrapole o valor total que o usuário tem em caixa, retornando uma resposta com código HTTP 400 e uma mensagem de erro no seguinte formato: { error: string }</li>
</ul>


<center><h2>Procedimentos para utilização do repositório</h2></center>

<ul>
    <li>
        <h3>clone o repositório </h3>
        <p>git clone link</p>
    </li>
    <li>
        <h3>navegue até o repositório clonado </h3>
        <p>cd desafio-primeiro-projeto-node</p>
    </li>
        <li>
        <h3>instale as dependências </h3>
        <p>yarn</p>
    </li>
    </li>
    <li>
        <h3>executar testes </h3>
        <p>yarn test</p>
    </li>
    <li>
        <h3>rodar a aplicação </h3>
        <p>yarn dev:server</p>
    </li>
</ul>


<p>Avalie o repositório com uma ⭐ para que mais devs possam vê-lo!</p>


<p>by <a href="https://www.linkedin.com/in/everton-c%C3%A9zar-3763a133/">Everton Cézar</a> !</p>
