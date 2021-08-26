import { createActions } from 'redux-actions'

export const getType = (reduxAction) => {
  return reduxAction().type
}

export const Login = createActions({
  loginRequest: (payload) => payload,
  loginRequestSuccess: (payload) => payload,
  loginRequestFailed: (error) => error,
})

export const Register = createActions({
  registerRequest: (payload) => payload,
  registerRequestSuccess: (payload) => payload,
  registerRequestFailed: (error) => error,
})
