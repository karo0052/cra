import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
const Footer = () => {
  return <footer>&copy; 2019</footer>;
};
function App() {
  const data = {
    age: 26,
    skills: ["a", "b"]
  };
  return (
    <div id="App">
      {" "}
      <Header />
      <Person mydata={data} name="Ulla" />
      <Person mydata={data} name="Bo" />
      <Person mydata={data} name="Ib" />
      <Person mydata={data} name="Åse" />
      <Person mydata={data} name="Ole" />
      <Footer />
    </div>
  );
}
function Header() {
  return (
    <header>
      <h1>This is React</h1>
      <section />
    </header>
  );
}
function Person(props) {
  console.log(props.name);
  return (
    <article>
      <h1>{props.name}</h1>
      <p>I'm {props.mydata.age}</p>
      <Skills skills={props.mydata.skills} />
    </article>
  );
}

function Skills() {
  return (
    <ul>
      <li>Skills here</li>
    </ul>
  );
}
//JSX
ReactDOM.render(<App />, document.getElementById("root"));
