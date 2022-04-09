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

    handleTab1 = () => this.setState({ activeTab: "tab1" });

    handleTab2 = () => this.setState({ activeTab: "tab2" })



    render() {
        const { activeTab } = this.state;
        return (
            <div className="App">
                <Tabs activeTab={activeTab} handleTab1={this.handleTab1} handleTab2={this.handleTab2} />
                {/* <Table users={users} /> */}
            </div>
        )
    }
}

export default App