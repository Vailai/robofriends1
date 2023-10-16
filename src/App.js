import React, { Component } from "react";
import CardList from "./CardList";
// import { robots } from './robots';
import Searchbox from "./Searchbox";
import './App.css'
import Scroll from "./Scroll";

class App extends Component {
    constructor() {
        super()
        this.state = {
            robots: [],
            searchfield: ''
        }
    }

    componentDidMount() {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(response => response.json())
            .then(users => this.setState({ robots: users }))
    }

    componentDidUpdate() {
        console.log("check2");
    }
    // Arrow function makes 'this.' point to the Searchbox input
    // Without the arrow function 'onSearchChange(e) {', 'this.' points at App
    onSearchChange = (e) => {
        this.setState({ searchfield: e.target.value })
        console.log(e.target.value);
    }

    render() {
        const filteredRobots = this.state.robots.filter(robots => {
            return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
        })
        if (this.state.robots.length === 0) {
            return <h1>Loading page...</h1>
        } else {
            return (
                <div className="tc">
                    <h1 className="f2">Robofriends</h1>
                    <Searchbox searchChange={this.onSearchChange} />
                    <Scroll >
                        <CardList robots={filteredRobots} />
                    </Scroll>
                </div>
            )
        }
    }
};

export default App;