import { createStore } from 'redux'

const reducerFunction = (state={authName: 'User', authEmail: 'sample@gmail.com', authUser: false}, action) => {
    if(action.type === 'loggedIn'){
        return {
            authName: action.authName || 'User',
            authEmail: action.authEmail,
            authUser: true
        }
    }

    if(action.type === 'loggedOut'){
        return {
            authName: '',
            authEmail: 'sample@gmail.com',
            authUser:false
        }
    }
    return state;
}

const store = createStore(reducerFunction)

export default store