import * as actionTypes from './actionTypes';

//action creator bir arrow fonksiyondur. değiştiği için payload kısmını parametre alır ve bir action döner.
export const increaseCounter = () => ({
    type:actionTypes.INCREASE_COUNTER,//actionTypes birer yönlendirici sabittir.
    payload: 1
})

export const decreaseCounter = () => ({
    type:actionTypes.DECREASE_COUNTER,
    payload: 1
})

export const increaseByTwoCounter = () => ({
    type:actionTypes.INCREASE_BY_TWO_COUNTER,
    payload: 2
})



