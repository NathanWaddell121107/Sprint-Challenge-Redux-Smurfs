import React from 'react';
import Smurf from './smurf';
import { connect } from 'react-redux';

const Smurfs = props => {
    return(
        <div>
            {props.smurfs.map(smurf => {
                return(
                    <div>
                        <h1>Welcome to Smurf Village!</h1>
                        <ul key={smurf.id}>
                            <Smurf
                                id={smurf.id}
                                name={smurf.name}
                                age={smurf.age}
                                height={smurf.height}
                            />
                        </ul>
                    </div>
                )
            })}
        </div>
    )
}

const mapStateToProps = state => {
    return {
        smurfs: state.smurfs
    }
}

export default connect(mapStateToProps)(Smurfs);