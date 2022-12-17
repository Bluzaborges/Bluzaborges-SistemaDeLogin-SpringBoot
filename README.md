## Sistema de login utilizando Java e React

Projeto desenvolvido na disciplina de Engenharia de Software utilizando metodologia ágil. Implementa um sistema de registro e login de usuário, com envio de e-mail de confirmação. O backend e o frontend foram desenvolvidos em Java e React, respectivamente. O banco de dados utilizado foi o PostgreSQL.

### Como inicializar o projeto

#### Iniciando o backend

A informações de conexão com o banco de dados estão localizadas no arquivo application.yml. O backend deve ser inicializado no diretório ~\\sports\sports com os seguintes comandos:

```shell
mvn install
mvn spring-boot:run
```

Por padrão, ele será inicializado na porta 8080.

#### Iniciando o servidor de e-mails

O servidor de e-mails utilizado foi o MailDev (https://github.com/maildev/maildev). Ele pode ser inicializado com o comando

```
maildev
```

#### Iniciando o frontend

Com o backend inicializado, é hora de inicializar o frontend. Ele deve ser inicializado no diretório ~\sports\ClientApp com o seguinte comando:

```
yarn start
```
