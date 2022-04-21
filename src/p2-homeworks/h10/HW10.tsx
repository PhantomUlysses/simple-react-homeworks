import React from 'react'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "./bll/store";
import {loadingAC, loadingOffAC, StateType} from "./bll/loadingReducer";
import preloader from './assets/preloader.svg'

function HW10() {
    // useSelector, useDispatch
    const loading = useSelector<AppStoreType, StateType>(state => state.loading);
    const dispatch = useDispatch();

    const setLoading = () => {
        // dispatch
        dispatch(loadingAC());
        // setTimeout
        let id = setTimeout(() => {
            dispatch((loadingOffAC()));
        }, 2000);
        console.log('loading...')
    };

    return (
        <div>
            <hr/>
            homeworks 10

            {/*should work (должно работать)*/}
            {loading.isLoading
                ? (
                    <div>крутилка...<img src={preloader}/></div>
                ) : (
                    <div>
                        <SuperButton onClick={setLoading}>set loading...</SuperButton>
                    </div>
                )
            }

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<Alternative/>*/}
            <hr/>
        </div>
    )
}

export default HW10
