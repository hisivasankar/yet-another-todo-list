import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import Console from './components/Console';
import * as Parser from './parser/CommandParser';

class Token extends Component {
    render() {
        return (
            <a href='#' className='tag'><span>{this.props.text}</span></a>
        )
    }
}

class TodoListItem extends Component {
    render() {
        return (
            <li className='todo-item'>
                <input type='checkbox'/>
                <label>{this.props.text}</label>
                <div className='categories'>
                    {
                        this.props.categories.map((sCategory, iIndex) => {
                            return <Token key={iIndex} text={sCategory}/>
                        })
                    }
                </div>
            </li>
        )
    }
}

class TodoListContainer extends Component {
    render() {
        return (
            <div className='todo-container'>
                <h2>Main</h2>
                <ul className="todo-content">
                    {
                        this.props.tasks.map((oTask, iIndex) => {
                            if(typeof oTask === 'string') {
                                oTask = Parser.parseCommand(oTask)
                            }
                            let sId = `list-item-${iIndex}`;
                            return <TodoListItem 
                                        key={sId}
                                        text={oTask.words.join(' ')}
                                        categories={oTask.categories}
                                    />
                        })
                    }
                </ul>
            </div>
        )
    }
}

let aMockTask = [
    'Read about react build system react $main #self-learning #react',
    'Sleep early and wake up early $main'
];

let aTasks = aMockTask.map((sTask) => Parser.parseCommand(sTask)),
    mockState = {
        main: aTasks,
        back: []
    };

class App extends Component {
    constructor(props) {
        super(props);
        this.state = mockState;
        this._handleCommand = this._handleCommand.bind(this);
    }
    _handleCommand(sCommand) {
        let oData = Parser.parseCommand(sCommand);
        this._addTask(oData);
    }
    _addTask(oData) {
        this.setState((prevState) => {
            return {
                main: prevState.main.concat(oData)
            };
        });
    }
    render() {
        return (
            <div>
                <Console onSubmit={this._handleCommand}/>
                <TodoListContainer category='main' tasks={this.state.main}/>
            </div>
        );
    }
}

let rootNode = document.getElementById("app");
ReactDOM.render(<App/>, rootNode);

console.log("Creating app!");

