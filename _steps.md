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
