import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Paper, Typography } from '@mui/material';
import { workouts } from 'reducers/workouts';
import styled from 'styled-components';

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

  const StyledLink = styled(Link)`
  text-decoration: none;
`;

  return (
    <div>
      {selectedBodyPartWorkouts.length > 0 && selectedBodyPartWorkouts.map((item) => {
        return (
          <StyledLink to={`/workouts/${item.Id}`}>
            <div key={item.Id}>
              <Paper elevation={3} sx={{ backgroundColor: 'greenyellow', p: 1, m: 2 }}>
                <Typography sx={{ fontSize: 16, m: 1, fontWeight: 'bold' }}>{item.Title}</Typography>
                <Typography sx={{ fontSize: 14, m: 1 }}>Muscle Group: {item.BodyPart}</Typography>
                <Typography sx={{ fontSize: 14, m: 1 }}>Type: {item.Type}</Typography>
                <Typography sx={{ fontSize: 14, m: 1 }}>Equipment: {item.Equipment}</Typography>
                <Typography sx={{ fontSize: 14, m: 1 }}>Level: {item.Level}</Typography>
              </Paper>
            </div>
          </StyledLink>
        )
      })}
    </div>
  )
}