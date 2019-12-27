### Inicialização do projeto

Pasta do projeto criada:

```zsh
mkdir rocketseat_desafio_04_react
```

```zsh
cd rocketseat_desafio_04_react
```

Git inicializado:

```zsh
git init
```

Tipos de final de linhas configurados:

```bash
git config core.autocrlf false
```

Após criar repositório no github, linkamos ele a pasta criada:

```zsh
git remote add origin https://github.com/cafecomlucas/rocketseat_desafio_04_react.git
```

`README.md` criado com a descrição do projeto. Pasta `README_assets` criada com as imagens da descrição.

Com os arquivos adicionados, o commit foi feito e o projeto foi enviado pro repositório:

```zsh
git add .
git commit -m "Inicializa projeto | Adiciona descrição"
git push -u origin master
```

---

## Configurando Babel, Webpack e React

Dependencias de desenvolvimento instaladas:

```bash
yarn add @babel/core @babel/preset-env @babel/preset-react @babel/plugin-proposal-class-properties -D
```

```bash
yarn add webpack webpack-cli webpack-dev-server -D
```

```bash
yarn add babel-loader css-loader style-loader file-loader -D
```

Dependencias comuns instaladas:

```
yarn add react react-dom prop-types
```

Arquivo `babel.config.js` criado e configurado com os `presets` e os `plugins`. Arquivo `webpack.config.js` criado e configurado com o `devServer` e os loaders (js/css/imagens) com suas respectivas regras.

Propriedade `dev` adicionada aos scripts do `package.json` e configurada para iniciar o `webpack-dev-server`.

Arquivo `App.js` criado e importado pro `index.js`.

Testes realizados no browser. Estrutura inicial concluída.

---

## Criação do componente Header

Arquivo `components/Header.js` criado com a estrutura HTML com o logo SVG do Facebook no lado esquerdo e um link fake no lado direito (utilizando Flexbox). A estilização foi feita no arquivo `Header.css` e importada no início do componente. A imagem SVG do Facebook também foi importada no início do componente (foi necessário incluir esse tipo de arquivo no `webpack.config.js`).

---

## Criação do componente para listar todos os Posts

O componente `PostList` foi criado com o estado e a estrutura HTML do componente. É feito um `.map` na lista de posts e para cada item retornamos o componente `Post` com os dados nas propriedades deste componente.

O componente `Post` foi criado com os dados recebidos via propriedades e com a estrutura HTML contendo cada dado recebido. Também foi criado e importado o arquivo `Post.css` para aplicar a estilização. Flexbox utilizado na estilização do nome e da data do usuário.

Componente `App` atualizado para importar o componente `PostList`.

---

## Criação do componente com cada comentário da lista de comentários

O componente `Post` foi modificado para percorer a lista de comentário e para cada comentário retornar o novo componente `Comment` com os dados nas propriedades deste componente.

O componente `Comment` foi criado com os dados recebidos via propriedades e com a estrutura HTML contendo cada dado recebido. Também foi criado e importado o arquivo `Comment.css` para aplicar a estilização.

---

## Ajustes finais

Para finalizar o projeto, alguns itens foram atualizados, tais como: a documentação, algumas estilizações CSS, a maneira de preencher as propriedades dos componentes (utilizando o SPREAD operator) e a transformação dos componentes de classe em componentes de função.

---
