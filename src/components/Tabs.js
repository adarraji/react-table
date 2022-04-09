import React from "react";

const Tabs = ({ activeTab }) => {
    return (
        <div className="Tabs">
            {/* Tab Nav*/}
            <ul className="tab-nav">
                <li>Tab 1</li>
                <li>Tab 2</li>
            </ul>
            <div className="tab-content">
                {/* content will be here*/}
            </div>
        </div>
    );
}

export default Tabs;