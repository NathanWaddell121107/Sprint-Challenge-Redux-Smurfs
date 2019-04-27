import React, {Component} from 'react';
import {connect} from 'react-redux';
import {addNewSmurf} from '../actions/index';

class Form extends Component {
    constructor() {
        super();
        this.state = {
            newSmurf: {
                name: '',
                age: '',
                height: '',
            }
        }
    }

    handleChange = e => {
        this.setState({
            newSmurf: {
                ...this.state.newSmurf,
                [e.target.name]: e.target.value
            }
        })
    }

    render() {
        return(
            <form>
                <h3>Add a new Smurf!</h3>
                <input
                    type='text'
                    placeholder='Name'
                    name='name'
                    value={this.state.newSmurf.name}
                    onChange={this.handleChange}
                />
                <input
                    type='text'
                    placeholder='Age'
                    name='age'
                    value={this.state.newSmurf.age}
                    onChange={this.handleChange}
                />
                <input
                    type='text'
                    placeholder='Height'
                    name='height'
                    value={this.state.newSmurf.height}
                    onChange={this.handleChange}
                />
                <button 
                onClick={() => this.props.addNewSmurf(this.state.newSmurf)}>
                Add Smurf</button>
            </form>
        )
    }
}

export default connect(null, {addNewSmurf})(Form);