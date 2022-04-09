import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import Table from "./Table";
import { users } from "../users";

function TabsComp() {
    return (
        <Tabs className="Tabs">
            <TabList>
                <Tab>Tab 1</Tab>
                <Tab>Tab 2</Tab>
                <Tab>Tab 3</Tab>
            </TabList>
            <TabPanel>
                <Table users={users} />
            </TabPanel>
            <TabPanel>
                <p>Tab 2 works!</p>
            </TabPanel>
            <TabPanel>
                <p>Tab 3 works!</p>
            </TabPanel>
        </Tabs>

    );
}

export default TabsComp;