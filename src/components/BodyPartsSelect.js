import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux';
import { Paper } from '@mui/material';

export const BodyPartsSelect = () => {
  const bodyParts = useSelector((store) => store.workouts.bodyPartsSelect)
  const [bodyPartsList, setBodyPartsList] = useState([])

  useEffect(() => {
    fetch(`https://project-express-api-lldotyfewa-lz.a.run.app/workouts?BodyPart=${bodyParts}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setBodyPartsList(data.body.workoutsData);
      })
      .catch((error) => alert(error, 'error'))
  }, [])

  return (
    <div>
      {bodyPartsList.length > 0 && bodyPartsList.map((item) => {
        return (
          <div key={item.Id}>
            <Paper elevation={3}>
              <p>{item.Title}</p>
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