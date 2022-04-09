import React, { Component } from "react";
import TabsComp from "../components/TabsComp";
import "./App.css";

class App extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div className="App">
                <TabsComp />
            </div >
        )
    }
}

export default App