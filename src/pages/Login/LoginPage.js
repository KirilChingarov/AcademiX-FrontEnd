import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './LoginPage.css'
import { validEmail } from '../../utils/regex.js'

const LoginPage = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [emailError, setEmailError] = useState('')
  const [passwordError, setPasswordError] = useState('')

  const navigate = useNavigate()

  const handleEmailChange = (e) => {
    setEmail(e.target.value)
    setEmailError('')
  }

  const handlePasswordChange = (e) => {
    setPassword(e.target.value)
    setPasswordError('')
  }

  const handleSubmit = (e) => {
    setEmailError('')
    setPasswordError('')

    if ('' === email) {
      setEmailError('Please enter your email')
      return
    }

    if (!validEmail.test(email)) {
      setEmailError('Please enter a valid email')
      return
    }

    if ('' === password) {
      setPasswordError('Please enter a password')
      return
    }

    if (password.length < 7) {
      setPasswordError('The password must be 8 characters or longer')
      return
    }
  }

  return (
    <div className={'mainContainer'}>
      <div className={'titleContainer'}>
        <div>AcademiX Login</div>
      </div>
      <br />
      <div className={'inputContainer'}>
        <input
          value={email}
          placeholder='Enter your email'
          onChange={(event) => handleEmailChange(event)}
          className={'inputBox'}
        />
        <label className='errorLabel'>{emailError}</label>
      </div>
      <br />
      <div className={'inputContainer'}>
        <input
          value={password}
          placeholder='Enter your password'
          onChange={(event) => handlePasswordChange(event)}
          className={'inputBox'}
        />
        <label className='errorLabel'>{passwordError}</label>
      </div>
      <br />
      <div className={'inputContainer'}>
        <input
          className={'inputButton'}
          type='button'
          onClick={handleSubmit}
          value={'Log in'}
        />
      </div>
    </div>
  )
}

export default LoginPage
