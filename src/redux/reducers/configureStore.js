import {createStore} from 'redux'

import reducers from './index' //birleştirilmiş reducersları storeun içine çektik.

export default function configureStore () { // ana index.js' e eklediğimiz fonksiyondur.
    return createStore(reducers) //ve burada store'larımızı oluşturup içine de birleştirdiğimiz reducerları attık.

}

