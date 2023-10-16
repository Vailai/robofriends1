import React, { Component } from "react";
import CardList from "../components/CardList";
// import { robots } from './robots';
import Searchbox from "../components/Searchbox";
import './App.css'
import Scroll from "../components/Scroll";

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
        const { robots, searchfield } = this.state;
        const filteredRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchfield.toLowerCase())
        })
        return (
            !robots.length
                ? <h1>Loading page...</h1>
                : <div className="tc">
                    <h1 className="f2">Robofriends</h1>
                    <Searchbox searchChange={this.onSearchChange} />
                    <Scroll >
                        <CardList robots={filteredRobots} />
                    </Scroll>
                </div>
 
        )
    }
};

export default App;