import React, { Component } from "react";
import TabsComp from "../components/TabsComp";
import "./App.css";
import { users } from "../users";

class App extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div className="App">
                <TabsComp users={users} />
            </div >
        )
    }
}

export default App