import React from 'react'

function User({user}) {
    return (
        <div>
            <table className="table">
  <thead>
    <tr>
    <th scope="col">Email</th>
      <th scope="col">Firstname</th>
      <th scope="col">LastName</th>
      <th scope="col">Password</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>{user.email}</td>
      <td>{user.firstName}</td>
      <td>{user.lastName}</td>
      <td>{user.password}</td>
    </tr>
    </tbody>
</table>
        </div>
    )
}
export default User
