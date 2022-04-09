import React, { Component } from "react";
import { users } from "../users";
import Table from "../components/Table";
import Tabs from "../components/Tabs";
import TabNav from "../components/TabNav";
import TabContent from "../components/TabContent";
import "./App.css";


class App extends Component {
    constructor() {
        super();
        this.state = {
            activeTab: "tab1"
        }
    }

    setActiveTab = (id) => {
        this.setState({ activeTab: id });
    }



    render() {
        const { activeTab } = this.state;
        return (
          
        )
    }
}

export default App