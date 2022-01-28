import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { decreaseCounter } from '../redux/actions/counterActions';

 class DecreaseCounter extends Component {
  render() {
    return <div>
        <button onClick={e=>{
            this.props.dispatch(decreaseCounter())
        }}>
            1 Azalat

        </button>


    </div>;
  }
}
 function mapDistpatchToProps (dispatch) {
     return {actions: bindActionCreators(decreaseCounter, dispatch)}
 }
 export default connect(mapDistpatchToProps)(DecreaseCounter)