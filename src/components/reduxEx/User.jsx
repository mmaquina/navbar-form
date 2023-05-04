import React, {useContext} from 'react'
import { UserContext } from '../../App'

function User() {
    const user = useContext(UserContext)
    return(
        <div>
            <p>Nombre: {user.nombre}</p>
            <p>Edad: {user.edad}</p>
            <p>Es Admin: {user.admin}</p>
        </div>
    )
}

export default User;