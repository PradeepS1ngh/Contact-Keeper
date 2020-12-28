import React, { useReducer } from 'react'
import axios from 'axios';
import AuthContext from './AuthContext';
import AuthReducer from './AuthReducer'

import setAuthToken from '../../utils/setAuthToken'
import {
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    USER_LOADED,
    AUTH_ERROR,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT,
    CLEAR_ERROR
} from '../types'


const AuthState = props => {
    const initialState = {
        token: localStorage.getItem('token'),
        isAuthenticated: false,
        loading: true,
        user: null,
        error: null
    }

    const [state, dispatch] = useReducer(AuthReducer, initialState)

    // Actions
    // load User
    const loadUser = async () => {
        //global variable
        if(localStorage.token){
            setAuthToken(localStorage.token);
        }
        try {
            const res = await axios.get('/api/auth');
            dispatch({ type: USER_LOADED, payload: res.data });
        } catch (err) {
            dispatch({type : AUTH_ERROR ,payload : err.data})
        }
    }

    //register
    const register = async formDate => {
        const config = {
            header: {
                'Content-Type': 'application/json'
            }
        }
        try {
            const res = await axios.post('/api/user/', formDate, config);
            console.log(res);
            dispatch({ type: REGISTER_SUCCESS, payload: res.data });
            loadUser();
        } catch (error) {
            dispatch({ type: REGISTER_FAIL, payload: error.response.data.msg })
        }
    }

    //loginUser
    const loginUser = async formData => {
        const config ={
            header : {
                'Content-Type' : 'application/json'
            }
        }

        try {
            const res = await axios.post('/api/auth/',formData,config);
            dispatch({type : LOGIN_SUCCESS , payload : res.data});
            loadUser();
        } catch (error) {
            dispatch({type : LOGIN_FAIL , payload : error.response.data.msg});
        }
    }

    //clearError
    const clearError = () => dispatch({ type: CLEAR_ERROR })



    return <AuthContext.Provider
        value={{
            token: state.token,
            isAuthenticated: state.isAuthenticated,
            loading: state.loading,
            user: state.user,
            error: state.error,
            register,
            clearError,
            loadUser,
            loginUser
        }}
    >
        {props.children}
    </AuthContext.Provider>
}

export default AuthState;