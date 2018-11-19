import React, {Component, useState, useEffect} from 'react';
import './Example.css';

class ExampleA extends Component {

    state = {
        count: 0
    };

    update = () => {
        this.setState({count: this.state.count + 1})
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

    const [count, update] = useState(0);
    // const count = useState(0)[0]; 把陣列展開 第1個就是當前的 count
    // const update = useState(0)[1]; 第2個是 update

    // state = {
    //     count: 0
    // };
    //
    // const update = (count) => {
    //     this.setState({count: count}) // 相當於把傳入的 count 做 setState
    // }

    return (
        <div>
            ExampleB
            <div>{count}</div>
            <button onClick={() => update(count + 1)}>Count</button>
        </div>
    );
};

class ExampleC extends Component {

    constructor() {
        super();
        this.state = {
            total: 100,
            done: 90,
            undone: 0,
            showDoneNumber: true,
            showUndoneNumber: true,
        };
        this.barDone = React.createRef();
        this.doneNumber = React.createRef();
        this.barUndone = React.createRef();
        this.undoneNumber = React.createRef();
    }


    componentDidMount() {
        this.setState({
            undone: this.state.total - this.state.done,
            showDoneNumber: true,
            showUndoneNumber: true,
        }, () => {
            if (this.doneNumber.current.offsetWidth >= this.barDone.current.offsetWidth) {
                this.setState({showDoneNumber: false});
            }
            if (this.undoneNumber.current.offsetWidth >= this.barUndone.current.offsetWidth) {
                this.setState({showUndoneNumber: false});
            }
        });
    }

    render() {
        return (
            <div className="progress-bar">
                <div className="bar-done" style={{width: this.state.done}} ref={this.barDone}>
                    <div className={this.state.showDoneNumber ? '' : 'shadow-number'} ref={this.doneNumber}>
                        {this.state.done}
                    </div>
                </div>
                <div className="bar-undone" style={{width: this.state.undone}} ref={this.barUndone}>
                    <div className={this.state.showUndoneNumber ? '' : 'shadow-number'} ref={this.undoneNumber}>
                        {this.state.undone}
                    </div>
                </div>
            </div>
        );
    }
}

// componentDidMount

const ExampleD = () => {

    const [total, update] = useState(100);
    const [done] = useState(90);
    const [undone] = useState(0);
    const [showDoneNumber] = useState(true);
    const [showUndoneNumber] = useState(true);

    useEffect(() => {

    });

    return (
        <div className="progress-bar">
            <div className="bar-done" style={{width: this.state.done}} ref={this.barDone}>
                <div className={this.state.showDoneNumber ? '' : 'shadow-number'} ref={this.doneNumber}>
                    {this.state.done}
                </div>
            </div>
            <div className="bar-undone" style={{width: this.state.undone}} ref={this.barUndone}>
                <div className={this.state.showUndoneNumber ? '' : 'shadow-number'} ref={this.undoneNumber}>
                    {this.state.undone}
                </div>
            </div>
        </div>
    );
};


export {
    ExampleA,
    ExampleB,
    ExampleC,
    ExampleD
};
