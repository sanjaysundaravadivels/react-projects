import React, { useState, useEffect } from "react";

const List = ({ people }) => {
  return (
    <>
      {people.map((person) => {
        const { id, name, image, dob } = person;
        const year = new Date().getFullYear();
        const a = dob.split("-");
        console.log(parseInt(a[2]));

        const age = year - parseInt(a[2]);
        console.log("age=", age);

        return (
          <article key={id} className="person">
            <img src={image} alt={name} />
            <h4>{name}</h4>
            <h5>{dob}</h5>
            <p>{age} years</p>
          </article>
        );
      })}
    </>
  );
};

export default List;
