import * as INIT_STATE from '../../constant/initState'
import { Login, Register, getType } from '../actions'

function userReducer(state = INIT_STATE.USER, action) {
  switch (action.type) {
    case getType(Login.loginRequest):
    case getType(Register.registerRequest):
      return {
        ...state,
        authLoading: true,
      }
    case getType(Login.loginRequestSuccess):
    case getType(Register.registerRequestSuccess):
      return {
        ...state,
        authLoading: false,
        isAuthenticated: true,
        user: action.payload,
      }
    case getType(Login.loginRequestFailed):
    case getType(Register.registerRequestFailed):
      return {
        ...state,
        authLoading: false,
      }
    default:
      return state
  }
}

export default userReducer
