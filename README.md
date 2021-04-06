# Case CRUD
## 1. Descrição:
Neste projeto foi desenvolvido um CRUD simples utilizando a Amazon Web Service com as seguintes características:
- O front-end foi desenvolvido utilizando o framework Angular e armazenado no S3 da Amazon
- O back-end foi desenvolvido em Java utilizando o EC2 da Amazon
- A persistência dos dados foi feita no DynamoDB

## 2. Como executar o projeto:
1. O primeiro passo é criar uma conta na Amazon Web Service
2. Depois de criar sua conta você deve acessar a ferramenta IAM e criar um usuário com acesso total as funções do DynamoDB
3. Aproveitando que ja estamos no console de gerenciamento do AWS vamos criar o nosso bucket no S3 onde será fornecido o nosso link para acesso
3. Após a criação do bucket devemos acessar os arquivos <a href ="https://github.com/FelipeMDR/CaseCRUD-Angular-AWS-SpringBoot/blob/main/SpringBoot/src/main/java/com/caseCRUD/config/DynamoDBConfiguration.java" >DynamoDBConfiguration.java<a> e <a href ="https://github.com/FelipeMDR/CaseCRUD-Angular-AWS-SpringBoot/blob/main/SpringBoot/src/main/java/com/caseCRUD/controller/ListaController.java">ListaController.java<a> e fazer as modificações para conectarmos nosso projeto com o DynamoDB.
4. Agora devemos criar a nossa instância no EC2 onde vamos executar o nosso back-end.
5. Criado o EC2 podemos fazer as modificações necessárias no arquivo <a href ="https://github.com/FelipeMDR/CaseCRUD-Angular-AWS-SpringBoot/blob/main/Angular/src/app/Lista/Service/service.service.ts">service.service.ts<a> e por fim gerar o build do nosso front-end.
6. Com o build gerado é só colocar os arquivos no S3 e nossa aplicação ja vai estar funcionando 😃
