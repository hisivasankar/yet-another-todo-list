import React, {Component} from 'react';

export default class Console extends Component {
    constructor(props) {
        super(props)
        this.state = {
            text: ""
        };

        this._handleOnChange = this._handleOnChange.bind(this);
        this._handleSubmit = this._handleSubmit.bind(this);
    }
    _handleOnChange(oEvent) {
        let sText = oEvent.target.value;
        this.setState((prevState) => {
            return {
                text: sText
            }
        });
    }
    _handleSubmit(oEvent) {
        oEvent.preventDefault();
        if(typeof this.props.onSubmit === 'function') {
            this.props.onSubmit(this.state.text);
            this.setState(() => {
                return {
                    text: ""
                }
            });
        }
    }
    render() {
        return (
            <div className='console-container'>
                <form action="#" onSubmit={this._handleSubmit}>
                    <input
                        type='text' 
                        className='console'
                        placeholder='Please type something!'
                        onChange={this._handleOnChange}
                        value={this.state.text}/>
                </form>
            </div>
        )
    }
}
