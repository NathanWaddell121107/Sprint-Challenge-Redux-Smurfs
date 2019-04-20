import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getSmurfs, deleteSmurf} from '../actions/index';
import Smurfs from './smurfs';

class SmurfsList extends Component {
    componentDidMount() {
        this.props.getSmurfs();
    }

    render() {
        return(
            <div>
                <Smurfs 
                    smurfs={this.props.smurfs}
                    deleteSmurf={this.props.deleteSmurf} 
                />
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        smurfs: state.smurfs,
        getting: state.getting
    }
}

export default connect(mapStateToProps, {getSmurfs, deleteSmurf})(SmurfsList);