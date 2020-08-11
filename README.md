# Funcionalidades

## Conexões

- Rota para listar o total de conexões realizadas;
- Rota para criar uma nova conexão;

## Aulas

- Rota para criar uma aula;
- Rota para listar aulas;
  - Filtrar por matéria, dia da semana e horário;


# Executando pela primeira vez

## Instalação dos módulos utilizados pelo projeto

yarn

## Criação do banco de dados

yarn knex:migrate

## Criação do banco de dados

yarn start

OBS: As consultas podem ser utilizadas por meio da URL:

http://localhost:3333/classes?week_day=1&subject=Matem%C3%A1tica&time=11%3A59
