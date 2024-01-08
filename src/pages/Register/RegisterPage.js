import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './RegisterPage.css'
import { validEmail } from '../../utils/regex.js'

const RegisterPage = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [repeatPassword, setRepeatPassword] = useState('')
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

  const handleRepeatPasswordChange = (e) => {
    setRepeatPassword(e.target.value)
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

    if ('' === repeatPassword) {
        setPasswordError('Please repeat your password')
        return
      }

    if (password.length < 7) {
      setPasswordError('The password must be 8 characters or longer')
      return
    }

    if(password != repeatPassword) {
        setPasswordError('The password must match')
      return
    }
  }

  return (
    <div id={'mainContainer'} >
      <div className={'wrapperContainer'}>
        <div id='img-container'>
        </div>
        <div className={'registerFormWrapper'}>
        <div className={'titleContainer'}>AcademiX Register</div>
        <div className={'inputContainer'}>
        <input
          value={email}
          placeholder='Enter your email'
          onChange={(event) => handleEmailChange(event)}
          className={'inputBox'}
        />
        <label className='errorLabel'>{emailError}</label>
        </div>
        <div className={'inputContainer'}>
        <input
          value={password}
          placeholder='Enter your password'
          onChange={(event) => handlePasswordChange(event)}
          className={'inputBox'}
        />
        <label className='errorLabel'>{emailError}</label>
        </div>
        <div className={'inputContainer'}>
        <input
          value={repeatPassword}
          placeholder='Enter your password again'
          onChange={(event) => handleRepeatPasswordChange(event)}
          className={'inputBox'}
        />
        <label className='errorLabel'>{passwordError}</label>
        </div>
        <div className={'buttonContainer'}>
        <input
          id={'inputButton'}
          type='button'
          onClick={handleSubmit}
          value={'Register'}
        />
        </div>
        </div>
      </div>
    </div>
  )
}

export default RegisterPage
