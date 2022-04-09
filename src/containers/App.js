import React, { Component } from "react";
import { users } from "../users";
import Table from "../components/Table";
import Tabs from "../components/Tabs";
import "./App.css";


class App extends Component {
    constructor() {
        super();
        this.state = {
            activeTab: "tab1"
        }
    }


    render() {
        const { activeTab } = this.state;
        return (
            <div className="App">
                <Tabs activeTab={activeTab} />
                {/* <Table users={users} /> */}
            </div>
        )
    }
}

export default App