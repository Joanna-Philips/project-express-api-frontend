/* eslint-disable max-len */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable operator-linebreak */
/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Select, MenuItem, InputLabel, FormControl, Typography, Card, CardActionArea, Container } from '@mui/material';
import { workouts } from 'reducers/workouts';
import { Loader } from './Loader';
import { BodyPartsSelect } from './BodyPartsSelect';

export const StartPage = () => {
  const dispatch = useDispatch();
  const allBodyParts = useSelector((store) => store.workouts.allBodyParts);
  const isLoading = useSelector((store) => store.workouts.isLoading)

  const selectBodyPart = (event) => {
    dispatch(workouts.actions.setBodyPartsSelect(event.target.value))
  }

  useEffect(() => {
    dispatch(workouts.actions.setLoading(true));
    fetch('https://project-express-api-lldotyfewa-lz.a.run.app/workouts/all')
      .then((res) => res.json())
      .then((data) => {
        const uniqueBodyParts = data.body.workoutsData.filter((item, index, self) =>
          index === self.findIndex((t) => (t.BodyPart === item.BodyPart)));
        dispatch(workouts.actions.setAllBodyParts(uniqueBodyParts));
      })
      .catch((error) => console.error(error))
      .finally(() => {
        setTimeout(() => {
          dispatch(workouts.actions.setLoading(false));
        }, 1000);
      })
  }, [dispatch]);

  if (isLoading) {
    return <Loader />
  }

  return (
    <Container sx={{ m: 0 }}>
      <CardActionArea>
        <Card sx={{ p: 1, m: 2 }}>
          <Typography sx={{ fontSize: 16 }}>Choose a muscle group you would like to train</Typography>
          {allBodyParts &&
      <FormControl sx={{ my: 2, minWidth: 200 }}>
        <InputLabel
          htmlFor="body-parts"
          id="demo-simple-select-label"
          label="Select muscle group">
          Select a muscle group
        </InputLabel>
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
      </CardActionArea>
      {allBodyParts.length > 0 ? <BodyPartsSelect /> : ''}
    </Container>
  )
}