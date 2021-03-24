import React from 'react'

import FormInput from '../../components/form-input/form-input.component'
import CustomButton from '../../components/custom-button/custom-button.component'

import './sign-in.styles.scss'

import { signInWithGoogle, auth } from '../../firebase/firebase.utils'

class SignIn extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: "",
            password: "",

        }
    }

    handleSubmit = async event => {
        event.preventDefault()

        const { email, password } = this.state;

        try {

            await auth.signInWithEmailAndPassword(email, password)
            this.setState({ email: '', password: '' })

        } catch (error) {
            console.log(error)
        }



    }

    handleChange = event => {

        const { name, value } = event.target;

        // this [ name ] is saying use this variable as key, instead of looking for exact name in current state
        this.setState({ [name]: value })
    }

    render() {



        return (
            <div className="sign-in">
                <h2>I already have an account</h2>
                <span>Sign in with your e-mail and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput
                        name="email"
                        type="email"
                        value={this.state.email}
                        handleChange={this.handleChange}
                        label="email"
                        required />

                    <FormInput
                        name="password"
                        type="password"
                        value={this.state.password}
                        handleChange={this.handleChange}
                        label="password"
                        required />

                    <div className='buttons'>
                        <CustomButton type='submit'>
                            Sign In
                        </CustomButton>

                        <CustomButton type="button" onClick={signInWithGoogle} isGoogleSignIn>
                            Sign In with Goolge
                        </CustomButton>
                    </div>

                </form>
            </div>
        )
    }
}

export default SignIn;