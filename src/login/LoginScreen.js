import React, {useContext} from 'react'
import { AuthContext } from '../auth/AuthContext'
import { types } from '../types/types'

export const LoginScreen = ({history}) => {

    const lastPath = localStorage.getItem('lastPath') || '/';

    const {dispatch} = useContext(AuthContext)
    
    const handleOnClick = ()=>{
        history.replace(lastPath)

        const action = {
            payload : {
                name: 'Jose'
            },
            type : types.login
        }

        dispatch(action);
    }

    return (
        <div className="container mt-5">
         <h1>LoginScreen</h1>   
         <hr/>

         <button
                className="btn btn-primary"
                onClick={handleOnClick}>
                    Login
         </button>
        </div>
    )
}
