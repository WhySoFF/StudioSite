import { DECREASE, INCREASE } from "./types";

const initialState = { count: 0 }



export default function (state = initialState, action) {





    //action {type:"INCREASE"}

    switch (action.type) {
        case INCREASE: {
            return { ...state, count: state.count + 1}
        }
        case DECREASE: {
            return { ...state, count: state.count - 1}
        }
        default: return state;
    }
}