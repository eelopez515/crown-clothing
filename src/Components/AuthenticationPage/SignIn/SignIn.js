import React, { Component } from 'react'
//Components
import FormInput from '../../FormInput/FormInput'
import Button from '../../Button/Button'
import { signInWithGoogle } from '../../../Firebase/firebase.utils'

import './SignIn.sass'

class SignIn extends Component {
    constructor(props) {
        super(props)
        this.state ={
            email: '',
            password: ''
        }

    }

    handleSubmit = e => {
        e.preventDefault()

        this.setState({
            email: '',
            password: ''
        })
    }

    handleChange = e => {
        const { value, name } = e.target

        this.setState({
            [name]: value
        })
    }

    render() {
        return (
            <div className='sign__in'>
                <h2 className='title'>I Already Have an Account</h2>
                <span className='title'>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput
                    name='email'
                    type='email' 
                    value={this.state.email}
                    handleChange={this.handleChange}
                    required
                    label='Email'
                    />
                    <FormInput
                    name='password'
                    type='password' 
                    value={this.state.password}
                    handleChange={this.handleChange}
                    required
                    label='Password'
                    />
                    <div className="buttons">
                        <Button type='submit'>Sign In</Button>
                        <Button
                        onClick={signInWithGoogle}
                        isGoogleSignIn
                        >Sign In With Google</Button>
                    </div>
                </form>
            </div>
        )
    }
}

export default SignIn
