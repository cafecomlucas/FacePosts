# [Rocketseat] Desafio 04: Criar interface semelhante ao Facebook

Desafio realizado após a conclusão do módulo 04: [https://github.com/cafecomlucas/rocketseat_04_react_intro](https://github.com/cafecomlucas/rocketseat_04_react_intro)

---

## Aplicação

Interface estática semelhante ao Facebook feita com ReactJS, Webpack, Babel e CSS Flexbox.

---

## Funcionalidades

Desenvolvimento de todos os elementos visuais de acordo com o layout abaixo.

![Layout Facebook](README_assets/facebook.png)

Os **componentes** desenvolvidos estão destacados na imagem abaixo. As descrições das responsabilidades de cada componente estão logo após a imagem.

![Componentes](README_assets/components.png)

Header (Amarelo): Responsável por exibir a logo e o link para acessar o perfil.

PostList (Verde): Responsável por armazenar os dados da listagem de post, esses dados ficam dentro do state do componente e não em uma variável comum. Exemplo:

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

Post (Vermelho): Responsável por exibir os dados do post, esses dados são recebidos através de uma propriedade recebida do componente PostList. Exemplo:

```js
posts.map(post => <Post key={post.id} data={post} />);
```

Comment (Azul): Responsável por exibir um comentário. Os dados do comentário são recebidos por uma propriedade do componente. Dentro do componente Post existe um novo `.map` para listar os comentários do post:

```js
data.comments.map(comment => <Comment key={comment.id} data={comment} />);
```
