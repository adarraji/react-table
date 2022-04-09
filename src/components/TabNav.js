import React from "react";

const TabNav = ({ id, title, activeTab, setActiveTab }) => {
    return (
        <li onClick={setActiveTab(id)} className={activeTab === id ? "active" : ""}>
            {title}
        </li>
    )
}

export default TabNav;