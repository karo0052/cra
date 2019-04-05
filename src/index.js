import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

function App() {
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
function Person(props) {
  return (
    <article>
      <header>
        <h1>{props.name}</h1>
        <p>{props.email}</p>
      </header>
      <h2>Hobbies</h2>
    </article>
  );
}
//JSX
ReactDOM.render(<App />, document.getElementById("root"));
