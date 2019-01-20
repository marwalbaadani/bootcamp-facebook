import React, { Component } from 'react'
import { Container, Header, SearchBar, UsersContainer } from './styles'
import UserCard from './components/UserCard'
import gql from 'graphql-tag'
import { Query } from 'react-apollo'

const GET_USER = gql`
  {
    users {
      id
      picture
      name
    }
  }
`

class Users extends Component {
  constructor(props) {
    super(props)
    this.state = {
      searchText: ''
    }
  }

  handleChange = e => {
    this.setState({ searchText: e.target.value })
  }

  render() {
    return (
      <Query query={GET_USER}>
        {({ loading, error, data }) => {
          if (loading) return 'Loading...'
          if (error) return `Error! ${error.message}`

          const users = data.users.map((item, index) => (
            <UserCard
              image={data.users[index].picture}
              name={data.users[index].name}
            />
          ))
          return (
            <Container>
              <Header>
                <SearchBar
                  classname="serachbar"
                  placeholder="Search"
                  onChange={this.handleChange}
                />
              </Header>
              <UsersContainer>{users}</UsersContainer>
            </Container>
          )
        }}
      </Query>
    )
  }
}

export default Users
