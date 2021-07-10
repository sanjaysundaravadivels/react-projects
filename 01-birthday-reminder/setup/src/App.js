import React, { useState, useEffect } from "react";
import data from "./data";
import List from "./List";
function App() {
  const { month } = data;
  const date = new Date().getMonth() + 1;
  console.log("month", date);
  const [people, setPeople] = useState(data);
  const [shows, setShows] = useState(false);

  const show = (month) => {
    const newPeople = people.filter((person) => person.month === month);
    setPeople(newPeople);
    setShows(true);
  };
  const showall = () => {
    setPeople(data);
    setShows(false);
  };

  return (
    <section className="container">
      <h3>Birthday Remainder</h3>
      <List people={people} />
      {shows ? (
        <button onClick={() => showall()}>Show all</button>
      ) : (
        <button onClick={() => show(date)}>Show this month</button>
      )}
    </section>
  );
}

export default App;
