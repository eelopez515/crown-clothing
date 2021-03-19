import React from 'react'
//Components
import SignIn from './SignIn/SignIn'
import SignUp from './SignUp/SignUp'
import './AuthenticationPage.sass'

function AuthenticationPage() {
    return (
        <div className='authentication'>
            <SignIn />
            <SignUp />
        </div>
    )
}

export default AuthenticationPage
