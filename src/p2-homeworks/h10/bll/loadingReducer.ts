import {AppStoreType} from "./store";

const initState = {
    isLoading: false
}

export type StateType = {
    isLoading: boolean
}

type LoadingACType = {
    type: "LOADING"
}
type LoadingOffACType = {
    type: "LOADING-OFF"
}
type ActionCreatorsType = LoadingACType | LoadingOffACType;

export const loadingReducer = (state: StateType = initState, action: ActionCreatorsType): StateType => { // fix any
    switch (action.type) {
        case 'LOADING': {
            return {...state, isLoading: true};
        }
        case 'LOADING-OFF': {
            return {...state, isLoading: false};
        }
        default: return state
    }
}

export const loadingAC = (): LoadingACType => {
    return {
        type: "LOADING",
    }
};// fix any
export const loadingOffAC = (): LoadingOffACType => {
    return {
        type: "LOADING-OFF",
    }
};