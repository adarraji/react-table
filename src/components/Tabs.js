import React, { Component } from "react";
import TabNav from "./TabNav";
import TabContent from "../components/TabContent";


class Tabs extends Component {
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
            <div className="Tabs">
                <ul className="tab-nav">
                    <TabNav title="Tab1" id="tab1" activeTab={activeTab} setActiveTab={this.setActiveTab} />
                    <TabNav title="Tab2" id="tab2" activeTab={activeTab} setActiveTab={this.setActiveTab} />
                    <TabNav title="Tab3" id="tab3" activeTab={activeTab} setActiveTab={this.setActiveTab} />
                </ul>

                <div className="tab-content">
                    <TabContent id={"tab1"} activeTab={activeTab}>
                        <p>Tab1 works !</p>
                    </TabContent>
                    <TabContent id={"tab2"} activeTab={activeTab}>
                        <p>Tab2 works !</p>
                    </TabContent>
                    <TabContent id={"tab3"} activeTab={activeTab}>
                        <p>Tab3 works !</p>
                    </TabContent>
                </div>
            </div >
        )
    }
}

export default Tabs