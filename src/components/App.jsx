import React from "react";
import Person from "./Person";

export default function App() {
  const data = [
    {
      id: 565,
      name: "Karoline",
      hobbies: ["samba", "crochet"],
      email: "byluethje@outlook.com",
      kids: 1,
      car: "Opel"
    },
    {
      id: 89,
      name: "Jonas",
      hobbies: ["js", "beer"],
      email: "jofh@kea.dk",
      kids: 3
    },
    {
      id: 456,
      name: "Thomas",
      hobbies: ["magic", "football"],
      email: "thomas_iversen@hotmail.com",
      kids: 1
    }
  ];
  const persons = data.map(person => {
    return <Person key={person.id} {...person} />;
  });
  return (
    <div id="App">
      <header>Header</header>
      {persons}
      <footer>Footer</footer>
    </div>
  );
}
