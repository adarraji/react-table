import React from "react";
import FirstTab from "./FirstTab";
import SecondTab from "./SecondTab";

const Tabs = ({ activeTab }) => {
    return (
        <div className="Tabs">
            {/* Tab Nav*/}
            <ul className="tab-nav">
                <li className={activeTab === "tab1" ? "active" : ""}>Tab 1</li>
                <li className={activeTab === "tab2" ? "active" : ""}>Tab 2</li>
            </ul>
            <div className="tab-content">
                <FirstTab />
                <SecondTab />
            </div>
        </div>
    );
}

export default Tabs;