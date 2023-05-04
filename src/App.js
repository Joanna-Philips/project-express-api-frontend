import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Provider } from 'react-redux'
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { Container } from '@mui/material';
import { WorkoutDetails } from 'components/WorkoutDetails';
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
    <BrowserRouter>
      <Container sx={{ backgroundColor: 'aliceblue', padding: 1, borderRadius: 1, height: '100vh' }}>
        <Provider store={store}>

          <Routes>
            <Route path="/" element={<StartPage />} />
            <Route path="/workouts/:Id" element={<WorkoutDetails />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>

        </Provider>
      </Container>
    </BrowserRouter>
  )
}
