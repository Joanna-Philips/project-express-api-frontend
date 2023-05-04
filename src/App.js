import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Provider } from 'react-redux'
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { Container, Box } from '@mui/material';
import { WorkoutDetails } from 'components/WorkoutDetails';
import { Navbar } from 'components/Navbar';
import { Footer } from 'components/Footer';
import { workouts } from './reducers/workouts';
import { StartPage } from './components/StartPage';

export const App = () => {
  const reducer = combineReducers({
    workouts: workouts.reducer
  });

  const store = configureStore({
    reducer
  });

  return (
    <BrowserRouter>
      <Box sx={{ backgroundColor: '#131619', backgroundImage: "url('https://images.unsplash.com/photo-1556817411-58c45dd94e8c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80')", backgroundRepeat: 'no-repeat', height: '300px' }}>
        <Navbar />
      </Box>
      <Container sx={{ backgroundColor: '#131619', padding: 0, m: 0, borderRadius: 1, height: '100vh', color: 'black' }}>
        <Provider store={store}>
          <Routes>
            <Route path="/" element={<StartPage />} />
            <Route path="/workouts/:Id" element={<WorkoutDetails />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </Provider>
      </Container>
      <Footer />
    </BrowserRouter>
  )
}
