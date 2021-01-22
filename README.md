# MG Transporte & Turismo LTDA

O sistema "MG Transorte & Turismo LTDA" é uma aplicação desenvolvida com PHP (Laravel) e Angular. Deve-se seguir atentamente 
as orientações a seguir para configurar o seu ambiente.

1º- O projeto necessita que sejam instalados o "docker", "docker-compose", "node", "npm instalados" em seu ambiente.  

2º- Verifique o ambiente que deseja subir esta correto.

3º- Em seguida, execute o comando: "docker-compose -f 'ambiente_desejado' up -d --build".

# BUILD DO PROJETO POR AMBIENTE

A seguir estarão as opções para subir o projeto de acordo com o ambiente desejado.

# AMBIENTE LOCAL

1º - O comando a ser executado é: "docker-compose -f local.yml up --build -d"

2º - Configure o seu arquivo hosts conforme descrito abaixo:

```yml
172.25.0.103    mg-transporte.com.br
```
3º - Para fazer o auto reload do frontend, deve se deixar o watch do ng no console, com o comando abaixo:
```
sudo docker exec -it mg-transporte-frontend ng build --watch
```
 
# AMBIENTE DESENVOLVIMENTO

1º - O comando a ser executado é: "docker-compose -f development.yml up --build -d"
 
# AMBIENTE HOMOLOGAÇÃO

1º - O comando a ser executado é: "docker-compose -f homolog.yml up --build -d"
 
# AMBIENTE PRODUÇÃO

1º - O comando a ser executado é: "docker-compose -f production.yml up --build -d"

Após seguir atentamente os passos acima, abra o browser de sua preferência insira a url "mg-transporte.com.br".
