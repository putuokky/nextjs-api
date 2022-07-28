import React, { Component } from 'react'

export default class Home extends Component {

  static async getInitialProps() {
    // const getUsers = await fetch('http://localhost:3000/api/users')
    const getUsers = await fetch('https://nextjs-api-azure.vercel.app/api/users')
    const dataUsers = await getUsers.json()
    return { users: dataUsers }
  }

  render() {
    const { users } = this.props;

    return (
      <div>
        {users.map(user => (
          <article key={user.name}>
            {user.name} &mdash; {user.website ?? <i>No Website</i>}
          </article>
        ))}
      </div>
    )
  }
}