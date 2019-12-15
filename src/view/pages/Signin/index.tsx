import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Box, TextField, FormControl, Checkbox, FormControlLabel, Button } from '@material-ui/core';
import { AppState } from 'store/rootReducer';
import { changeValue, login } from 'store/auth/actions';

import signinIcon from 'view/assets/icons/signin-icon.svg'
import { Icon, Link, Copyright } from './styled';

export const Signin = React.memo(() => {
  const dispatch = useDispatch();
  const { email, password } = useSelector((state: AppState) => state.auth);
 
  const handleLogin = React.useCallback(() => {
    dispatch(login.request());
  }, [dispatch]);

  const handleInputChange = React.useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value, validity: { valid } } = e.target;
      if (valid) {
        dispatch(changeValue({ name, value }));
      }
    }, [dispatch],
  );

  return (
    <Box 
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="100vh">
    <Box 
      display="flex"
      flexDirection="column"
      maxWidth="380px"
      pr="28px"
      pl="28px"
    >
    <Icon src={signinIcon} />
      <Box textAlign="center">Bxoд в аккааунт</Box>
      <form  noValidate autoComplete="off">
        <FormControl 
          fullWidth 
          margin="normal"
        >
          <TextField 
            id="outlined-basic" 
            label="Почта" 
            variant="outlined"
            name="email"
            value={email}
            onChange={handleInputChange}
          />
        </FormControl>
        <FormControl 
          fullWidth 
          margin="normal"
        >
          <TextField 
            id="outlined-basic" 
            label="Пароль"
            type="password"
            variant="outlined"
            name="password"
            value={password}
            onChange={handleInputChange}
          />
        </FormControl>
        <Box mb="20px">
          <FormControlLabel 
            control={
              <Checkbox 
                value="checkedC"
                color="primary" 
              />
            } 
            label="Запомнить меня" 
          />
        </Box>
        <Box>
          <Button variant="contained" color="primary" fullWidth onClick={handleLogin} >
            Войти в аккаунт
          </Button>
        </Box>
      </form>
        <Box 
          display="flex"
          justifyContent="space-between"
          mt="20px"
        >
          <Link to="/reset">Забыли пароль?</Link> 
          <Link to="/signup">Еще нет аккаунта? Регистрацыя</Link>
        </Box>
        <Copyright>
          Copyright ваш сайт 2019
        </Copyright>
      </Box>
    </Box>
  )
});

