import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Paper } from '@mui/material';
import { workouts } from 'reducers/workouts';

export const BodyPartsSelect = () => {
  const dispatch = useDispatch();
  const bodyParts = useSelector((store) => store.workouts.bodyPartsSelect);
  const [bodyPartsList, setBodyPartsList] = useState([])

  const resetStore = () => {
    (dispatch(workouts.actions.reset()))
  }

  useEffect(() => {
    fetch(`https://project-express-api-lldotyfewa-lz.a.run.app/workouts?BodyPart=${bodyParts}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setBodyPartsList(data.body.workoutsData);
      })
      .catch((error) => alert(error, 'error'))
  }, [bodyPartsList, resetStore])

  return (
    <div>
      {bodyPartsList.length > 0 && bodyPartsList.map((item) => {
        return (
          <div key={item.Id}>
            <Paper elevation={3} sx={{ backgroundColor: 'pink', p: 1, m: 2 }}>
              <p>{item.Title}</p>
              <p>Muscle Group: {item.BodyPart}</p>
              <p>Type: {item.Type}</p>
              <p>Equipment: {item.Equipment}</p>
              <p>Level: {item.Level}</p>
            </Paper>
          </div>
        )
      })}
    </div>
  )
}