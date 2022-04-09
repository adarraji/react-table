import React from "react";
import FirstTab from "./FirstTab";
import SecondTab from "./SecondTab";

const Tabs = ({ activeTab, handleTab1, handleTab2 }) => {
    return (
        <div className="Tabs">
            {/* Tab Nav*/}
            <ul className="tab-nav">
                <li className={activeTab === "tab1" ? "active" : ""} onClick={handleTab1}>Tab 1</li>
                <li className={activeTab === "tab2" ? "active" : ""} onClick={handleTab2}>Tab 2</li>
            </ul>
            <div className="tab-content">
                {activeTab === "tab1" ? <FirstTab /> : <SecondTab />}
            </div>
        </div>
    );
}

export default Tabs;