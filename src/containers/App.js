import React, { Component } from "react";
import { users } from "../users";
import Table from "../components/Table";


const App = () => {
    return (
        <div>
            <Table users={users} />
        </div>
    )
}
export default App