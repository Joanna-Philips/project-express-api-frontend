import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { workouts } from 'reducers/workouts';
import { Button, Card, Typography } from '@mui/material';

export const WorkoutDetails = () => {
  const { Id } = useParams();
  const dispatch = useDispatch();
  const selectedWorkout = useSelector((store) => store.workouts.selectedWorkout);

  const navigate = useNavigate();
  const onBackButtonClick = () => {
    navigate(-1);
  }
  useEffect(() => {
    fetch(`https://project-express-api-lldotyfewa-lz.a.run.app/workouts/${(Id)}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        dispatch(workouts.actions.setSelectedWorkout(data.body.workoutsData));
      })
      .catch((error) => console.error(error));
  }, [Id, dispatch])

  return (
    <div>
      {selectedWorkout && (
        <Card sx={{ p: 1, m: 2 }}>
          <Typography sx={{ fontSize: 20, m: 1 }}>{selectedWorkout.Title}</Typography>
          <Typography sx={{ fontSize: 16, m: 1 }}>
            Muscle Group: {selectedWorkout.BodyPart}
          </Typography>
          <Typography sx={{ fontSize: 16, m: 1 }}>
            Type: {selectedWorkout.Type}
          </Typography>
          <Typography sx={{ fontSize: 16, m: 1 }}>
            Equipment: {selectedWorkout.Equipment}
          </Typography>
          <Typography sx={{ fontSize: 16, m: 1 }}>
            Level: {selectedWorkout.Level}
          </Typography>
          <Typography sx={{ fontSize: 16, m: 1 }}>
            How it&apos;s done: {selectedWorkout.Desc}
          </Typography>
          <Button variant="contained" sx={{ backgroundColor: 'greenyellow', color: 'black', my: 1 }} type="button" onClick={onBackButtonClick}>Back to List</Button>
        </Card>
      )}
    </div>
  );
};
