import React, { Component } from "react";
import CardList from "./CardList";
import { robots } from './robots';
import Searchbox from "./Searchbox";
import './App.css'

class App extends Component {
    constructor() {
        super()
        this.state = {
            robots: robots,
            searchfield: ''
        }
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
        return (
            <div className="tc">
                <h1 className="f2">Robofriends</h1>
                <Searchbox searchChange={this.onSearchChange} />
                <CardList robots={filteredRobots} />
            </div>
        )
    }
};

export default App;