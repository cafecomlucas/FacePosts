import React, { Component } from "react";

import Post from "./Post";

class PostList extends Component {
  state = {
    posts: [
      {
        id: 1,
        author: {
          name: "Jessica Pereira",
          avatar: "../assets/profile02.jpg"
        },
        date: "12 Jan 2020",
        content:
          "Pessoal, alguém indica alguma tecnologia para trabalhar com SPA?",
        comments: [
          {
            id: 1,
            author: {
              name: "Lucas Soares",
              avatar: "../assets/profile01.jpg"
            },
            content:
              "Recomendo o ReactJS, é uma tecnologia incrível para SPAs. Depois conta pra gente o que você achou dele."
          },
          {
            id: 2,
            author: {
              name: "Jessica Pereira",
              avatar: "../assets/profile02.jpg"
            },
            content: "Bacana! Obrigada!"
          }
        ]
      },

      {
        id: 2,
        author: {
          name: "Lucas Soares",
          avatar: "../assets/profile01.jpg"
        },
        date: "12 Jan 2020",
        content:
          "Pessoal, alguém indica alguma tecnologia para trabalhar com SPA?",
        comments: [
          {
            id: 1,
            author: {
              name: "Jessica Pereira",
              avatar: "../assets/profile02.jpg"
            },
            content: "Recomendo o ReactJS, é uma tecnologia incrível para SPAs."
          }
        ]
      }
    ]
  };

  render() {
    const { posts } = this.state;

    return (
      <ul className="postList">
        {posts.map(post => (
          <Post key={post.id} {...post} />
        ))}
      </ul>
    );
  }
}

export default PostList;
