import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  workoutSearch: '',
  bodyPartSelect: []
}

export const workouts = createSlice({
  name: 'workouts',
  initialState,
  reducers: {

    setWorkoutSearch: (store, action) => {
      store.workoutSearch = action.payload
    //   store.bodyPartSelect = []
    },
    setAuthorSelect: (store, action) => {
      store.bodyPartSelect = action.payload
    //   store.workoutSearch = ''
    }
  }
})