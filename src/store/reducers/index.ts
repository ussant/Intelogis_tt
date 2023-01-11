import {PayloadAction} from "@reduxjs/toolkit";

const SET_COORDS = "SET_COORDS";

const initialState = {
    data: []
};

export function reducer(state = initialState, action: PayloadAction<any>) {
    console.log({action})
    switch (action.type) {
        case SET_COORDS:
            return { ...state, data: action.payload };
        default:
            return state;
    }
}
