
import React from 'react';
import FormInput from '../form-input/form-input.component.jsx'
import CustomButton from '../custom-button/custom-button.component.jsx'
import './sign-in.styles.scss'
import {signInWithGoogle} from '../../firebase/firebase.utils';

class SignIn extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            email:"",
            password:""
        }
    }

    handleSubmit = event  => {
        this.setState({email:'',password:""})
        event.preventDefault()
    }

    handleChange = event =>{
        const {name,value} = event.target;
        this.setState({[name]:value})
    }

    render(){
        return (
            <div className='sign-in'>
                <h2>I already have an account.</h2>
                <span>Sign in with email and password</span>
                <form onSubmit={this.handleSubmit}>
                   <FormInput 
                   name='email' 
                   value={this.state.email} 
                   required 
                   label="Email"
                   handleChange={this.handleChange}
                    /> 
                   
                   <FormInput 
                   name='password' 
                   value={this.state.password} 
                   required 
                   label="Password"
                   handleChange={this.handleChange}
                   />
                    <div className="buttons">
                        <CustomButton type="submit"  > Sign In </CustomButton>
                        <CustomButton onClick={signInWithGoogle} isGoogleSignIn > Sign In with Google</CustomButton>
                    </div>
                   
                </form>
            </div>
        )
    }
}

export default SignIn;