import React, { Component } from 'react'
import { Title, LineInput, SubmitButton, SecondaryOptionText } from './styles'

class SignUp extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: ''
    }
  }

  onChange = (key, e) => {
    this.setState({ [key]: e.target.value })
  }

  handleSubmission = () => {
    this.setState({ email: this.state.email })
    this.setState({ password: this.state.password })
    // console.log(this.state.email)
    // console.log(this.state.password)
  }

  render() {
    return (
      <React.Fragment>
        <Title>Nice to meet you!</Title>
        <LineInput
          placeholder="Email"
          onChange={e => this.onChange('email', e)}
        />
        <LineInput
          placeholder="Password"
          onChange={e => this.onChange('password', e)}
          type="password"
        />
        <SubmitButton onClick={this.handleSubmission}>Get Started</SubmitButton>
        <SecondaryOptionText onClick={this.props.changeMode}>
          Or Login
        </SecondaryOptionText>
      </React.Fragment>
    )
  }
}

export default SignUp
