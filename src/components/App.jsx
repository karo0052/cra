import React from "react";
import Person from "./Person";

export default function App() {
  const data = [
    {
      name: "Karoline",
      hobbies: ["samba", "crochet"],
      email: "byluethje@outlook.com",
      kids: 1,
      car: "Opel"
    },
    {
      name: "Jonas",
      hobbies: ["js", "beer"],
      email: "jofh@kea.dk",
      kids: 3
    },
    {
      name: "Thomas",
      hobbies: ["magic", "football"],
      email: "thomas_iversen@hotmail.com",
      kids: 1
    }
  ];
  const persons = data.map(person => {
    return <Person {...person} />;
  });
  return (
    <div id="App">
      <header>Header</header>
      {persons}
      <footer>Footer</footer>
    </div>
  );
}
