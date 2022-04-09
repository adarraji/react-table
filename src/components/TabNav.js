import React from "react";

const TabNav = ({ id, title, activeTab, setActiveTab }) => {
    const onTabClick = () => setActiveTab(id)

    return (
        <li onClick={onTabClick} className={activeTab === id ? "active" : ""}>
            {title}
        </li>
    )
}

export default TabNav;