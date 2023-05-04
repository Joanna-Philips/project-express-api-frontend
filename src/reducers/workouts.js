import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  workoutSearch: '',
  allBodyParts: [],
  bodyPartsSelect: [],
  selectedBodyPartWorkouts: []
}

export const workouts = createSlice({
  name: 'workouts',
  initialState,
  reducers: {

    setWorkoutSearch: (store, action) => {
      store.workoutSearch = action.payload;
    },
    setAllBodyParts: (store, action) => {
      store.allBodyParts = action.payload;
    },
    setBodyPartsSelect: (store, action) => {
      store.bodyPartsSelect = action.payload;
    },
    setSelectedBodyPartWorkouts: (store, action) => {
      store.selectedBodyPartWorkouts = action.payload;
    },
    reset: (store) => {
      store.bodyPartsSelect = []
    }
  }
})
