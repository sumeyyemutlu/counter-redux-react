import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {increaseCounter} from '../redux/actions/counterActions'//increaseCounter'u çağırabilmek için ekledik.


 class IncreaseCounter extends Component {
  render() {
    return <div>
        <button onClick={e=> { //e eventin e si obje oluşturarak veriliyor.
            this.props.dispatch(increaseCounter())
        }}>
            1 Arttır
        </button>
    </div>;
  }
}
function mapDistpatchToProps(dispatch) {//dispatch actionu çağırmak için kullanılan parametre
    return {actions: bindActionCreators(increaseCounter,dispatch)}//increaseCounter counterActionların içindeki fonksiyondur
    //bindActionCreators bir actionu bağlamak için kullanılan redux fonksiyonudur.
}
export default connect(mapDistpatchToProps)(IncreaseCounter)//IncreaseCounter componentini redux'a connect ettik.
