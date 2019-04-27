import React from 'react';
import Smurf from './smurf';
import { connect } from 'react-redux';

const Smurfs = props => {
    return(
        <div>
            {props.smurfs.map(smurf => {
                return(
                    <div>
                        <ul key={smurf.id}>
                            <Smurf
                                id={smurf.id}
                                name={smurf.name}
                                age={smurf.age}
                                height={smurf.height}
                            />
                            <button
                                onClick={() => {props.deleteSmurf(smurf.id)}}
                            >Delete</button>
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