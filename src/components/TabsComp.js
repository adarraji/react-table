import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import UserTable from "./UserTable";
import PostTable from "./PostTable";

function TabsComp({ users, usersExternal, posts, albums }) {
    return (
        <Tabs className="Tabs">
            <TabList>
                <Tab>Users</Tab>
                <Tab>Users External</Tab>
                <Tab>Posts External</Tab>
            </TabList>
            <TabPanel>
                <UserTable users={users} />
            </TabPanel>
            <TabPanel>
                <UserTable users={usersExternal} />
            </TabPanel>
            <TabPanel>
                <PostTable posts={posts} />
            </TabPanel>
        </Tabs>

    );
}

export default TabsComp;