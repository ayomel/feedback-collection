import axios from 'axios'
import { FETCH_USER } from './types'

export function fetchUser() {
 return async dispatch => {
   const response = await axios.get('/api/current_user')
    return dispatch({type:FETCH_USER , payload:response});
   }
}
