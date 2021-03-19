import React, { Component } from 'react'
//Components
import FormInput from '../../FormInput/FormInput'
import Button from '../../Button/Button'

import { auth, createUserProfileDocument } from '../../../Firebase/firebase.utils'

import './SignUp.sass'

class SignUp extends Component {
    constructor() {
        super()
        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        }
    }

    handleSubmit = async e => {
        e.preventDefault()

        const { displayName, email, password, confirmPassword } = this.state

        if(password !== confirmPassword) {
            alert("Passwords Don't Match")
            return
        }

        try {
            const { user } = await auth.createUserWithEmailAndPassword(email, password)

            await createUserProfileDocument(user, { displayName })
            this.setState({
                displayName: '',
                email: '',
                password: '',
                confirmPassword: ''
            })

        } catch(error) {
            console.log('Something went wrong', error.message)
        }
    }

    handleChange = e => {
        const { name, value } = e.target
        this.setState({ [name]: value })

    }

    render() {
        const { displayName, email, password, confirmPassword } = this.state
        return (
            <div className='sign__up'>
                <h2 className='title'>Create An Account</h2>
                <span>Sign Up with Email and Password</span>
                <form action="sign__up__form" onSubmit={this.handleSubmit}>
                    <FormInput
                    type='text'
                    name='displayName'
                    value={displayName}
                    onChange={this.handleChange}
                    label='Diplay Name'
                    required
                    />
                    <FormInput
                    type='email'
                    name='email'
                    value={email}
                    onChange={this.handleChange}
                    label='Email'
                    required
                    />
                    <FormInput
                    type='password'
                    name='password'
                    value={password}
                    onChange={this.handleChange}
                    label='Password'
                    required
                    />
                    <FormInput
                    type='password'
                    name='confirmPassword'
                    value={confirmPassword}
                    onChange={this.handleChange}
                    label='Confirm Password'
                    required
                    />
                    <Button type='submit'>Sign Up</Button>
                </form>
            </div>
        )   
    }
}

export default SignUp
