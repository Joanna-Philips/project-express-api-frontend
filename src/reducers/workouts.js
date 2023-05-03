import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  workoutSearch: '',
  bodyPartsSelect: []
}

export const workouts = createSlice({
  name: 'workouts',
  initialState,
  reducers: {

    setWorkoutSearch: (store, action) => {
      store.workoutSearch = action.payload;
    },
    setBodyPartsSelect: (store, action) => {
      store.bodyPartsSelect = action.payload;
    },
    reset: (store) => {
      store.bodyPartsSelect = []
    }
  }
})
