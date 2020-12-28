import React, { Component } from 'react';


export default class ProfileStatus extends Component {
    state = {
        editMode: false,
        statusText: this.props.status
    }

    activateEditMode = () => {
        this.setState({
            editMode: true
        })
    }
    diActivateEditMode = () => {
        this.setState({
            editMode: false
        })
        this.props.updateStatusTC(this.state.statusText)
    }
    onChangeStatusInput = (e) => {
        this.setState({
            statusText: e.target.value
        })
    }

    componentDidUpdate(prevProps, prevState) {
        if(prevState.statusText !== this.props.status) {
            this.setState({
                statusText: this.props.status
            })
        }
    }

    render() {
        if (!this.state.editMode) {
            return <div>
                <span onClick={this.activateEditMode} >{this.props.status || 'no status'} </span>
            </div>
        }
        if (this.state.editMode) {
            return <div>
                <input autoFocus={true} 
                       onBlur={this.diActivateEditMode} 
                       type="text" 
                       value={this.state.statusText}
                       onChange={this.onChangeStatusInput} />
            </div>
        }
    }
}
