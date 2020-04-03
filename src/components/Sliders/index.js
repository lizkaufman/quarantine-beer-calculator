import React, { useState, useEffect } from "react"
import css from "./sliders.module.css"

//need image of beer, three sliders (beers, drinks/day, people), display area for result (amt of days)
// beers / (people * drinks/day)

function Sliders() {
  const [beers, setBeers] = useState(1)
  const [people, setPeople] = useState(1)
  const [beersPerDay, setBeersPerDay] = useState(1)
  const [result, setResult] = useState(0)

  useEffect(() => {
    setResult((beers / (people * beersPerDay)).toFixed(1))
  }, [beers, people, beersPerDay])

  const handleBeerChange = event => {
    const value = event.target.value
    setBeers(value)
    console.log({ beers })
  }
  const handlePeopleChange = event => {
    const value = event.target.value
    setPeople(value)
    console.log({ people })
  }
  const handleBeersPerDayChange = event => {
    const value = event.target.value
    setBeersPerDay(value)
    console.log({ beersPerDay })
  }

  return (
    <div id={css.app}>
      <h2 id={css.resultsDisplay}>
        You will last{" "}
        <span id={css.resultsNumber}>
          {result} {result > 1 ? "days" : "day"}
        </span>{" "}
        with enough beer to see you through!
        <br />
        After that though, things might get scary...
      </h2>
      <p>
        You have {beers} {beers > 1 ? "beers" : "beer"} in the house.
      </p>
      <input
        className={css.slider}
        type="range"
        min="1"
        max="80"
        value={beers}
        onChange={handleBeerChange}
      ></input>
      <p>
        {people} {people > 1 ? "people" : "person"} will be drinking.
      </p>
      <input
        className={css.slider}
        type="range"
        min="1"
        max="10"
        value={people}
        onChange={handlePeopleChange}
      ></input>
      <p>
        Each person will drink an average of {beersPerDay}{" "}
        {beersPerDay > 1 ? "beers" : "beer"} each day.{" "}
      </p>
      <input
        className={css.slider}
        type="range"
        min="1"
        max="20"
        value={beersPerDay}
        onChange={handleBeersPerDayChange}
      ></input>
    </div>
  )
}

export default Sliders
