import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux';

export const BodyPartsSelect = () => {
  const bodyParts = useSelector((store) => store.workouts.bodyPartsSelect)
  const [bodyPartsList, setBodyPartsList] = useState([])

  useEffect(() => {
    fetch(`https://project-express-api-lldotyfewa-lz.a.run.app/workouts?BodyPart=${bodyParts}`)
      .then((res) => res.json())
      .then((data) => setBodyPartsList(data))
      .catch((error) => alert(error, 'error'))
    //   .finally(() => setLoading(false));
    console.log('fetch data bodyPartsSelect', bodyPartsList)
  }, [])

  return (
    <div>
      {bodyPartsList.length > 0 && bodyPartsList.map((item) => {
        return (
          <div key={item.Id}>
            <div>
              <p>{item.Title}</p>
              <p>Type: {item.Type}</p>
              <p>Equipment: {item.Equipment}</p>
              <p>Level: {item.Level}</p>
            </div>
          </div>
        )
      })}
    </div>
  )
}