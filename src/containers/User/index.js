import React from 'react'
import { Container, Image, Post, Posts } from './styles'
import defaultImage from './RiversCuomo.jpg'
// import gql from 'graphql-tag'
// import { Query } from 'react-apollo'

// const GET_USER = gql`
//   {
//     users {
//       id
//       picture
//       posts {
//         userId
//         id
//         content
//       }
//     }
//   }
// `

const User = ({ image, posts }) => (
  <Container>
    <Image src={image} />
    <Posts>{posts.map(post => <Post id={post.id}>{post.content}</Post>)}</Posts>
  </Container>
)

User.defaultProps = {
  image: defaultImage,
  posts: [{ id: '1212313', content: 'El Scorcho' }]
}

export default User
