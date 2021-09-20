
## Descrição

  Tecnologias
   <p>Front-end</p>
   <ul>
     <li>React 17</li>
     <li>Apollo Client - (GraphQl)</li>
     <li>Docker / Docker-compose</li>
     <li>Template: Paper Dashboard React</li>
   </ul> 

   <p> Back-end</p> 
     <ul>
     <li>Framework NodeJs: NestJs</li>
     <li>Apollo Server Express - (GraphQl)</li>
     <li>Banco de dados: Postgres</li>
     <li>Docker / Docker-compose</li>
   </ul> 

## Requisitos
  <p>preparado para ser executado utilizando <u>Linux</u> como sistema operacional
  necessário ter <u>docker</u> e <u>docker-compose</u> instalados
  </p>



## Clonar o projeto (back-end)

<a href="https://github.com/ed-vieira/teste-wa-backend" target="_blank">
  Projeto back-end
</a>

```bash
$ git clone git@github.com:ed-vieira/teste-wa-backend.git
```

## Clonar o projeto (front-end)

<a href="https://github.com/ed-vieira/teste-wa-frontend" target="_blank">
  Projeto front-end
</a>

```bash
$ git clone git@github.com:ed-vieira/teste-wa-frontend.git
```


## Instalação
  <p> Para ser executado corretamente é necessário executar os comandos necessários na ordem 
  correta  </p>
  <p> Para auxiliar nesta tarefa é utilizado o Makefile para simplificar e organizar os comandos, de forma que comandos mais complexos ou que precisam ser executados em uma ordem determinada possam ser executados de maneira correta. 
  </p> 

 <a href="https://github.com/ed-vieira/teste-wa-backend" target="_blank">
  <h4>Back-end</h4>
 </a>

 <p> Para executar o projeto pela primeira vez execute o comando na pasta do projeto: </p>

```bash
$ make init
```

<p> Execute as migrations e o seeder para criar e popular as tebelas: </p>

```bash
$ make migrate-seed
```



<p> O primeiro comando ira prepara os arquivos de configuração e iniciará os processos do docker-compose, os comandos podem ser vistos no arquivo Makefile na pasta do projeto.</p>

<p>O segundo ira criar e preencher a tabela com dados do Faker</p>

<p>Pode ser necessário alguns segundos de diferença entre a execução dos dois comandos porque o cointainer de banco de dados pode ja ter iniciado com sucesso mas ainda não estar pronto para estabelecer conexões. </p>


<a href="https://github.com/ed-vieira/teste-wa-frontend" target="_blank">
 <h4>Front-end</h4>
</a> 

 <p> Para executar o projeto front-end pela primeira vez execute o comando na pasta do projeto: </p>

```bash
$ make init
```
 <p>Este comando prepara os arquivos de configuração e inicia o container</p>




## License

[MIT licensed](LICENSE).
