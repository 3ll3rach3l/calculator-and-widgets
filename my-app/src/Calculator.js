import React from "react";

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        result: 0,
        num1: "",
        num2: ""
    };
    // TODO: Initialize state
  }

  handleFirstNum = e => {
    //console.log(e);
    const { value } = e.target;
    this.setState({
        num1: Number.parseInt(value),
    })
  };

  handleSecondNum = e => {
    //console.log(e);
    const { value } = e.target;
    this.setState({
        num2: Number.parseInt(value),
    })
  };
  

   add = e => {
        this.setState({
            result: this.state.num1 + this.state.num2
        })
    }
    subtract = e => {
        this.setState({
            result: this.state.num1 - this.state.num2
        })
    }
    multiply = e => {
        this.setState({
            result: this.state.num1 * this.state.num2
        })
    }
    divide = e => {
        this.setState({
            result: this.state.num1 / this.state.num2
        })
    }

    handleClear = e => {
        this.setState(
            {
                result: 0,
                num1: '',
                num2: ''
            }
        )
    };

  render() {
// const { result, num1, num2 } = this.state;
      return (
          <>
          <div>
              <h1>Result: {this.state.result}</h1>
            <input value={this.state.num1} onChange={this.handleFirstNum} placeholder="First number" />
            <input value={this.state.num2} onChange={this.handleSecondNum} placeholder="Second number" />   
            <button onClick={this.handleClear}>Clear</button>
              </div>
              <div>
                  <button onClick={this.add}>+</button>
            <button onClick={this.subtract}>-</button>
            <button onClick={this.multiply}>*</button>
            <button onClick={this.divide}>/</button>
        </div>
        </>
        );
    }
}

export default Calculator;