/* eslint-disable max-len */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable operator-linebreak */
/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Select, MenuItem, InputLabel, FormControl, Typography, Card, CardMedia } from '@mui/material';
import { workouts } from 'reducers/workouts';
import { BodyPartsSelect } from './BodyPartsSelect';

export const StartPage = () => {
  const dispatch = useDispatch();
  const allBodyParts = useSelector((store) => store.workouts.allBodyParts);

  const selectBodyPart = (event) => {
    dispatch(workouts.actions.setBodyPartsSelect(event.target.value))
  }

  useEffect(() => {
    fetch('https://project-express-api-lldotyfewa-lz.a.run.app/workouts/all')
      .then((res) => res.json())
      .then((data) => {
        const uniqueBodyParts = data.body.workoutsData.filter((item, index, self) =>
          index === self.findIndex((t) => (t.BodyPart === item.BodyPart)));
        dispatch(workouts.actions.setAllBodyParts(uniqueBodyParts));
      })
      .catch((error) => console.error(error));
  }, [dispatch]);

  return (

    <div>
      <Card sx={{ p: 1, m: 2 }}>
        <CardMedia
          sx={{ height: 150 }}
          image="https://images.unsplash.com/photo-1556817411-58c45dd94e8c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          title="green iguana" />
        <Typography sx={{ fontSize: 20 }}>WORKOUT NOW</Typography>
        <Typography sx={{ fontSize: 16 }}>Choose a muscle group you would like to work on</Typography>
        {allBodyParts &&
      <FormControl sx={{ m: 2, minWidth: 200 }}>
        <InputLabel htmlFor="body-parts" id="demo-simple-select-label" label="Select muscle group">Select a muscle group</InputLabel>
        <Select
          aria-label="List of body parts"
          value={selectBodyPart}
          name="body-parts"
          label="Select muscle group"
          onChange={selectBodyPart}>

          <MenuItem defaultValue disabled> Select muscle group</MenuItem>
          {allBodyParts.map((item) => (
            <MenuItem key={item.Id} value={item.BodyPart}>
              {item.BodyPart}
            </MenuItem>
          ))}
        </Select>
      </FormControl>}
      </Card>
      {allBodyParts.length > 0 ? <BodyPartsSelect /> : ''}
    </div>
  )
}