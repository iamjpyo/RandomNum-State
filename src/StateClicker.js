import React, { Component} from "react";

class StateClicker extends Component {
    constructor(props){
        super(props);
        this.state = { num: 1 }
        this.randomNum = this.randomNum.bind(this);
    }

    randomNum(e) {
        let han = Math.floor(Math.random()* 10);
        this.setState({num : han});
    }
    render() {
        return(
        <div>
            <h1>The number is: {this.state.num}</h1>
        <div>{ this.state.num === 7 ? "Congrats! you win! Reload page" : <button onClick={this.randomNum}>Click here!</button> }</div>
        </div>
        )
    }
}

export default StateClicker;