import React, { Component } from "react";
import TabsComp from "../components/TabsComp";
import "./App.css";
import { users } from "../users";


class App extends Component {
    constructor() {
        super();
        this.state = {
            userslocal: users,
            usersExternal: [],
            posts: [],
            albums: []
        }
    }

    async getJSONData() {
        const urls = [
            "https://jsonplaceholder.typicode.com/users",
            "https://jsonplaceholder.typicode.com/posts",
            "https://jsonplaceholder.typicode.com/albums"
        ];
        try {
            const promises = urls.map(url => fetch(url).then(resp => resp.json()));
            const [usersJSON, postsJSON, albumsJSON] = await Promise.all(promises);
            this.setState({
                usersExternal: usersJSON,
                posts: postsJSON,
                albums: albumsJSON
            });

        }
        catch (err) {
            console.log("Error!!!!  ", err);
        }
    }

    componentDidMount() {
        this.getJSONData();
    }

    render() {
        const { userslocal, usersExternal, posts, albums } = this.state;
        return (
            <div className="App">
                <TabsComp users={userslocal} usersExternal={usersExternal} posts={posts} albums={albums} />
            </div >
        )
    }
}

export default App