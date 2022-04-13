import React from "react";

const PostTable = ({ posts }) => {
    const tableData = posts.map(posts => {
        return (
            <tr>
                <td>{posts.id}</td>
                <td>{posts.title}</td>
                <td>{posts.body}</td>
            </tr>
        )
    })
    return (
        <div>
            <table className="table-style table table-bordered ">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Title</th>
                        <th>Body</th>
                    </tr>
                </thead>
                <tbody>
                    {tableData}
                </tbody>
            </table>
        </div>
    )

}

export default PostTable;