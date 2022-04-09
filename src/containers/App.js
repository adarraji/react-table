import React, { Component } from "react";
import { users } from "../users";
import Table from "../components/Table";
import Tabs from "../components/Tabs";
import "./App.css";


class App extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div className="App">
                <Tabs />
                {/* <Table users={users} /> */}
            </div>
        )
    }
}

export default App