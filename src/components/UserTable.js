import React from "react";

const UserTable = ({ users }) => {
    const tableData = users.map(user => {
        return (
            <tr>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
            </tr>
        )
    })
    return (
        <div>
            <table className="table-style table table-bordered ">
                <thead key="1">
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Username</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {tableData}
                </tbody>
            </table>
        </div>
    )

}

export default UserTable