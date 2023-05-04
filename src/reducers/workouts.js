import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  allBodyParts: [],
  bodyPartsSelect: [],
  selectedBodyPartWorkouts: [],
  selectedWorkout: {},
  isLoading: false
}

export const workouts = createSlice({
  name: 'workouts',
  initialState,
  reducers: {

    setAllBodyParts: (store, action) => {
      store.allBodyParts = action.payload;
    },
    setBodyPartsSelect: (store, action) => {
      store.bodyPartsSelect = action.payload;
    },
    setSelectedBodyPartWorkouts: (store, action) => {
      store.selectedBodyPartWorkouts = action.payload;
    },
    setSelectedWorkout: (store, action) => {
      store.selectedWorkout = action.payload;
    },
    setLoading: (store, action) => {
      store.isLoading = action.payload
    },
    reset: (store) => {
      store.bodyPartsSelect = []
    }
  }
})
