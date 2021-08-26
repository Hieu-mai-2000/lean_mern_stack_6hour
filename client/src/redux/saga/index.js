import { call, put, takeLatest } from 'redux-saga/effects'
import { Login, Register } from '../actions'
import * as api from '../../api'
import {LOCAL_STORAGE_TOKEN_NAME} from '../../constant'

function* login(action) {
  try {
    const response = yield call(api.login, action.payload)
    console.log('redux-saga:  ', response.data)
    if(response.data.success){
      localStorage.setItem(LOCAL_STORAGE_TOKEN_NAME, response.data.token)
      yield put(Login.loginRequestSuccess(response.data.token))
    }
  } catch (error) {
    if (error.response.data) console.log('message-error: ',error.response.data)
    console.log(error.message)
    yield put(Login.loginRequestFailed())
  }
}

function* register(action) {
  try {
    const response = yield call(api.register, action.payload)
    console.log('redux-saga-register:  ', response.data)
    if (response.data.success) {
      localStorage.setItem(LOCAL_STORAGE_TOKEN_NAME, response.data.token)
      yield put(Register.registerRequestSuccess(response.data.token))
    }
  } catch (error) {
    if (error.response.data) console.log('message-error: ', error.response.data)
    console.log(error.message)
    yield put(Register.registerRequestFailed())
  }
}

function* mySaga() {
  yield takeLatest(Login.loginRequest, login)
  yield takeLatest(Register.registerRequest, register)
}

export default mySaga
