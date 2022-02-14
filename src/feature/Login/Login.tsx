import React, { FC, useState } from 'react';
import './Login.css';
const validateEmail = (email: string) => {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};

interface Props {
  setIsLogged: (v: boolean) => void;
}
export const Login: FC<Props> = ({ setIsLogged }) => {
  const [email, setemail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [password, setPassword] = useState('');
  const [passwordError, setPassworError] = useState('');

  const isSubmitButtonDisable = (): boolean => {
    if (passwordError || emailError) {
      return true;
    }
    return false;
  };
  return (
    <div className="Login">
      <h1>PCO UI</h1>
      <div>
        <label htmlFor="#email">Email</label>
        <input
          id="emial"
          placeholder="Email"
          type="email"
          className="FullWidth"
          onChange={(e) => {
            const value = e.target.value;
            setemail(value);
            if (validateEmail(value)) {
              setEmailError('');
            } else {
              setEmailError('Enter Valid Email Address');
            }
          }}
        />
        {emailError && <span className="Error">{emailError}</span>}
      </div>
      <div>
        <label htmlFor="#passwor">Password</label>
        <input
          id="password"
          placeholder="Password"
          type="password"
          className="FullWidth"
          onChange={(e) => {
            const value = e.target.value;
            setPassword(value);
            if (value.length >= 8) {
              setPassworError('');
            } else {
              setPassworError('Password should be at least 8 characters');
            }
          }}
        />
        {passwordError && <span className="Error">{passwordError}</span>}
      </div>
      <button
        className="Button FullWidth"
        disabled={isSubmitButtonDisable()}
        onClick={(e) => {
          if (passwordError || emailError) {
            console.log('not valid');
          } else {
            console.log({ email, password });
            console.log('Login button clicked');
            setIsLogged(true);
          }
        }}
      >
        Login
      </button>
    </div>
  );
};
