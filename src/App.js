import React from 'react'
import { Provider } from 'react-redux'
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { Container } from '@mui/material';
import { workouts } from './reducers/workouts';
import { StartPage } from './components/StartPage'

export const App = () => {
  const reducer = combineReducers({
    workouts: workouts.reducer
  });

  const store = configureStore({
    reducer
  });

  return (
    <Provider store={store}>
      <Container>
        <h1>Hello from App!</h1>
        <StartPage />
      </Container>
    </Provider>
  )
}
