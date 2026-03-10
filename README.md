# app-tarefas

![](./screenshot.png)

App de Tarefas - exercício desenvolvido durante o curso Dev Start com foco em Programação Orientada a Objetos (POO).

## Sobre o Projeto

Este projeto consiste em um App de Afazeres (To-Do List) desenvolvido com HTML, CSS e JavaScript.

A estilização foi mantida simples, pois o principal objetivo do exercício é praticar conceitos de Programação Orientada a Objetos (POO) e a implementação de métodos de instância responsáveis por manipular os dados da aplicação.

O aplicativo permite adicionar tarefas, visualizar todos os afazeres e filtrá-los por categoria (trabalho ou pessoal).

Para que o aplicativo funcione corretamente, é necessário implementar sete métodos de instância.

## Métodos Implementados

### 1. obterTudo()

Este método deve retornar todos os afazeres cadastrados.

### 2. obterContagem()

Este método deve retornar um número representando a quantidade total de afazeres.

➡️ Depois de implementar esses dois métodos, será possível visualizar os exemplos de afazeres renderizados na interface.

### 3. adicionar(titulo, categoria)

Este método recebe duas strings:

titulo

categoria

Ele deve adicionar um novo objeto de afazer à lista existente, mantendo o mesmo formato dos objetos já utilizados.

➡️ Após implementar este método, será possível adicionar novos afazeres através do formulário.

### 4. obterTrabalho()

Retorna um array contendo apenas os afazeres da categoria trabalho.

### 5. obterContagemDeTrabalho()

Retorna a quantidade de afazeres que pertencem à categoria trabalho.

Dica: tente manter o código DRY (Don't Repeat Yourself) para evitar repetição.

➡️ Depois disso, será possível filtrar tarefas da categoria trabalho na interface.

### 6. obterPessoal()

Retorna um array contendo apenas os afazeres da categoria pessoal.

### 7. obterContagemPessoal()

Retorna a quantidade de afazeres da categoria pessoal.

Novamente, tente manter o código DRY (Don't Repeat Yourself).

## Funcionalidades

➕ Adicionar novos afazeres
📋 Visualizar todos os afazeres cadastrados
🔎 Filtrar tarefas por categoria
💼 Filtrar tarefas da categoria trabalho
🏠 Filtrar tarefas da categoria pessoal
🔢 Contagem total de tarefas
📊 Contagem de tarefas por categoria

Tecnologias Utilizadas

🌐 HTML5

🎨 CSS3

⚡ JavaScript (ES6+)

🧠 Programação Orientada a Objetos (POO)

### Links

- Solution Github: [Repository](https://github.com/Jascran23/app-tarefas)
- Live Site: [Solution Page](https://jascran23.github.io/app-tarefas/)