import React from 'react'
//Components
import SignIn from './SignIn/SignIn'
import './AuthenticationPage.sass'

function AuthenticationPage() {
    return (
        <div className='authentication'>
            <SignIn />
        </div>
    )
}

export default AuthenticationPage
