/* eslint-disable max-len */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable operator-linebreak */
/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Select, MenuItem, InputLabel, FormControl } from '@mui/material';
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
  }, []);

  return (

    <div>
      <h2>Keep fit!</h2>
      <p>Choose a muscle group you would like to work on</p>
      {allBodyParts &&
      <FormControl sx={{ m: 2, minWidth: 200 }}>
        <InputLabel hidden htmlFor="body-parts">Select a muscle group</InputLabel>
        <Select
          aria-label="List of body parts"
          value="body-parts"
          name="body-parts"
          label="Select muscle group"
          onChange={selectBodyPart}>

          {allBodyParts.map((item) => (
            <MenuItem key={item.Id} value={item.BodyPart}>
              {item.BodyPart}
            </MenuItem>
          ))}
        </Select>
      </FormControl>}
      {allBodyParts.length > 0 ? <BodyPartsSelect /> : ''}
    </div>
  )
}