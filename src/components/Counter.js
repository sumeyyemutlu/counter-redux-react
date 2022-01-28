import React, { Component } from 'react';
import { connect } from 'react-redux';

class Counter extends Component {
  render() {
    return <div>
        <h1>{this.props.counter}</h1> {//counterReducer gelen statei kullanmak için props yazdık.
        }
    </div>;
  }
}
function mapStateToProps(state) {
    return {counter : state.counterReducer}//counter diye obje oluşturduk ve mapStateToProps fonksiyonundan counterReducerdaki state bilgisini al.
}//state bilgisini counterReducer'dan çek.
//bunu da ana index.js dosyasına yazdığımız Provider kapsayıcısı içindeki store= {store} ile sağladık.

export default connect(mapStateToProps)(Counter);
//counterın propslarına statei bağla. 
//connect, componentleri store bağlar