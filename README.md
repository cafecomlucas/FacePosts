# FacePosts

Interface estática responsiva semelhante ao Facebook feita com ReactJS, Webpack, Babel e CSS Flexbox. Trata-se apenas do Front-end, portanto, os dados são estáticos e não são recebidos de nenhuma API.

Passo a passo documentado em: [https://github.com/cafecomlucas/FacePosts/blob/master/\_steps.md](https://github.com/cafecomlucas/FacePosts/blob/master/_steps.md)

![Interface do Facebook Responsiva](README_assets/facepost_scroll_resize.gif)

## Como iniciar

### Versão online

Através do endereço [face-posts.herokuapp.com](https://face-posts.herokuapp.com/)

### Localmente

- Clone este repositório:

```bash
git clone [caminho_do_repositorio]
```

- Acesse o diretório criado:

```bash
cd [nome_da_pasta]
```

- Instale as dependencias:

```bash
yarn
```

- Inicie a aplicação:

```bash
yarn dev
```

## Funcionalidades

Desenvolvimento de todos os elementos visuais da imagem acima com os seguintes **componentes**:

**Header**: Responsável por exibir a logo e o link (fake) para acessar o perfil.

**PostList**: Responsável por armazenar os dados da listagem de post, esses dados ficam dentro do state do componente e não em uma variável comum. Exemplo:

```js
class PostList extends Component {
  state = {
    posts: [
      {
        id: 1,
        author: {
          name: "Julio Alcantara",
          avatar: "http://url-da-imagem.com/imagem.jpg"
        },
        date: "04 Jun 2019",
        content: "Pessoal, alguém sabe se a Rocketseat está contratando?",
        comments: [
          {
            id: 1,
            author: {
              name: "Diego Fernandes",
              avatar: "http://url-da-imagem.com/imagem.jpg"
            },
            content: "Conteúdo do comentário"
          }
        ]
      },
      {
        id: 2
        // Restante dos dados de um novo post
      }
    ]
  };
}
```

**Post**: Responsável por exibir os dados do post, esses dados são recebidos através de uma propriedade recebida do componente PostList. Exemplo:

```js
posts.map(post => <Post key={post.id} data={post} />);
```

**Comment**: Responsável por exibir um comentário. Os dados do comentário são recebidos por uma propriedade do componente. Dentro do componente Post existe um novo `.map` para listar os comentários do post:

```js
data.comments.map(comment => <Comment key={comment.id} data={comment} />);
```
