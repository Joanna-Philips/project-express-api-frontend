/* eslint-disable operator-linebreak */
/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { workouts } from 'reducers/workouts';
import { BodyPartsSelect } from './BodyPartsSelect';

export const StartPage = () => {
  const dispatch = useDispatch();
  const [allWorkouts, setAllWorkouts] = useState([])
  const bodyParts = useSelector((store) => store.workouts.bodyPartsSelect)

  const selectBodyPart = (event) => {
    dispatch(workouts.actions.setBodyPartsSelect(event.target.value))
  }

  useEffect(() => {
    // setLoading(true)
    fetch('https://project-express-api-lldotyfewa-lz.a.run.app/workouts/all')
      .then((res) => res.json())
      .then((data) => setAllWorkouts(data))
      .catch((error) => alert(error, 'error'))
      // .finally(() => setLoading(false));
    console.log('fetch data startpage', allWorkouts)
  }, [])

  return (

    <div>
      {allWorkouts &&
      <div>
        <h1>StartPage here</h1>
        <label hidden htmlFor="body-parts">Select a muscle group to work on:</label>
        <select
          aria-label="List of body parts"
          value="body-parts"
          name="body-parts"
          onChange={selectBodyPart}>

          <option defaultValue>Select a muscle group</option>
          {allWorkouts.map((item) => {
            return (
              <option
                key={item.Id}
                value={item.BodyPart} />
            );
          })}
        </select>
      </div>}
      {bodyParts.length > 1 ? <BodyPartsSelect /> : ''}
    </div>
  )
}