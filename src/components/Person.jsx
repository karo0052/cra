import React from "react";

export default function Person(props) {
  // OPTION 1
  //   let car = "";
  //   if (props.car) {
  //     car = <p>Car: {props.car}</p>;
  //   }
  // Then write {car} inside the return below

  // OPTION 2
  //   const car = props.car ? <p>Car: {props.car}</p> : "";
  // Then write {car} inside the return below

  // OPTION 3
  // if statement as in the code below
  return (
    <article className="teacher">
      <header>
        <h1>{props.name}</h1>
        <p>{props.email}</p>
      </header>
      {props.car && <p>Car: {props.car}</p>}
      <h2>Hobbies</h2>
    </article>
  );
}
