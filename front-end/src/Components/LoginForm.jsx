import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { emailValidate, passwordValidate } from '../Utils/loginValidate';

function LoginForm() {
  const [showPopUp] = useState(false);
  const [isDisabled, setIsDisabled] = useState(true);
  const [loginFields, setLoginFiels] = useState({
    email: '',
    password: '',
  });

  const handleChange = ({ target }) => {
    const { id, value } = target;
    setLoginFiels({
      ...loginFields,
      [id]: value,
    });
  };

  useEffect(() => {
    const emailIsValid = emailValidate(loginFields.email);
    const passwordIsValid = passwordValidate(loginFields.password);
    setIsDisabled(!(emailIsValid && passwordIsValid));
  }, [loginFields]);
  return (
    <FormContainer>
      <label htmlFor="common_login__input-email">
        Login
        <input
          onChange={ handleChange }
          type="email"
          data-testid="common_login__input-email"
        />
      </label>

      <label htmlFor="common_login__input-password">
        Senha
        <input
          onChange={ handleChange }
          type="password"
          data-testid="common_login__input-password"
        />
      </label>

      <button
        disabled={ isDisabled }
        type="submit"
        data-testid="common_login__button-login"
      >
        LOGIN
      </button>

      <button type="button" data-testid="common_login__button-register">
        Ainda não tenho conta
      </button>
      { showPopUp && (
        <p data-testid="common_login__element-invalid-email">
          Mensagem de Erro
        </p>)}
    </FormContainer>
  );
}

const FormContainer = styled.div`
  display: flex;
  width: fit-content;
  flex-direction: column;
  & label {
    display: flex;
    flex-direction: column;
  }
`;

export default LoginForm;
