import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { workouts } from 'reducers/workouts';

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
  }, [Id])

  return (
    <div>
      {selectedWorkout && (
        <div>
          <h5>{selectedWorkout.Title}</h5>
          <p>Muscle Group: {selectedWorkout.BodyPart}</p>
          <p>Type: {selectedWorkout.Type}</p>
          <p>Equipment: {selectedWorkout.Equipment}</p>
          <p>Level: {selectedWorkout.Level}</p>
          <button type="button" onClick={onBackButtonClick}>Back to List</button>
        </div>
      )}
    </div>
  );
};
