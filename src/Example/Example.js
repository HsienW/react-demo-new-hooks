import React, {Component, useState} from 'react';

class ExampleA extends Component {

    state = {
        count: 0
    };

    update = () => {
        this.setState({count: this.state.count + 1});
    };

    render() {
        return (
            <div>
                ExampleA
                <div>{this.state.count}</div>
                <button onClick={this.update}>Count</button>
            </div>
        );
    }
}

const ExampleB = () => {

    const [count, setCount] = useState(0);

    return (
        <div>
            ExampleB
            <div>{count}</div>
            <button onClick={() => setCount(count + 1)}>Count</button>
        </div>
    );
};


export {
    ExampleA,
    ExampleB
};
