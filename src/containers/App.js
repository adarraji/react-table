import React, { Component } from "react";
import { users } from "../users";
import Table from "../components/Table";
import Tabs from "../components/Tabs";


const App = () => {
    return (
        <div>
            <Tabs />
            <Table users={users} />
        </div>
    )
}
export default App