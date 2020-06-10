# <center> App Repositórios do GitHub

Aplicação desenvolvida no curso da SkyLab com [Diego Fernandes](https://github.com/diego3g).
O Objetivo era passar os conceitos básicos do ES6 (Java Script).
Peguei o que ele passou no cruso e implementei mais alguns itens no código, nada grandioso, mas valei a pena para testar os conhecimentos.

---
A aplicação usa [API](https://api.github.com) que extrai informções do GitHub e devolve o repositório que a pessoa informou numa lista simples, ele só mostrou no curso atá a inserção na lista, fui um pouco além e implementei mais duas funcionalidades, a primeira grava a lista no LocalStorage, assim mesmo que a pessoa saia do navegador fica ali como um histórico, e a outra foi a possibilidade de excluir dessa lista.

---
> O que precisa configurar
* Instalar o Yarn
* yarn add webpack webpack-cli -D
* Instalar as dependencias do Babel
  * yarn add @babel/plugin-proposal-object-rest-spread
  * yarn add babel-loader@9.0.0-beta.0 -D
  * yarn add @babel/polyfill -D 
  * yarn add @babel/plugin-transform-async-to-generator -D
* yarn add webpack-dev-server -D

Obs.: Os Arquivos de configurações são basicamente o (packege.json e webpack.config.js), todo o passo a passo está no curso que é gratuíto.

[Link do Curso](https://skylab.rocketseat.com.br/journey/starter)