import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getSmurfs} from '../actions/index';
import Smurfs from './smurfs';

class SmurfsList extends Component {
    componentDidMount() {
        this.props.getSmurfs();
    }

    render() {
        return(
            <div>
                <Smurfs smurfs={this.props.smurfs} />
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

export default connect(mapStateToProps, {getSmurfs})(SmurfsList);