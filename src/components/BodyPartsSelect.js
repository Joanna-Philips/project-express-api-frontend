import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Paper } from '@mui/material';
import { workouts } from 'reducers/workouts';

export const BodyPartsSelect = () => {
  const dispatch = useDispatch();
  const selectedBodyPart = useSelector((store) => store.workouts.bodyPartsSelect);
  const selectedBodyPartWorkouts = useSelector((store) => store.workouts.selectedBodyPartWorkouts);

  // const resetStore = () => {
  //   (dispatch(workouts.actions.reset()))
  // }

  useEffect(() => {
    fetch(`https://project-express-api-lldotyfewa-lz.a.run.app/workouts?BodyPart=${selectedBodyPart}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        dispatch(workouts.actions.setSelectedBodyPartWorkouts(data.body.workoutsData));
      })
      .catch((error) => console.error(error))
  }, [selectedBodyPart, dispatch])

  return (
    <div>
      {selectedBodyPartWorkouts.length > 0 && selectedBodyPartWorkouts.map((item) => {
        return (
          <Link to={`/workouts/${item.Id}`}>
            <div key={item.Id}>
              <Paper elevation={3} sx={{ backgroundColor: 'pink', p: 1, m: 2 }}>
                <h5>{item.Title}</h5>
                <p>Muscle Group: {item.BodyPart}</p>
                <p>Type: {item.Type}</p>
                <p>Equipment: {item.Equipment}</p>
                <p>Level: {item.Level}</p>
              </Paper>
            </div>
          </Link>
        )
      })}
    </div>
  )
}