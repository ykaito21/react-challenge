import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

function People() {
  const friends = [{ name: "yuki" }, { name: "taro" }, { name: "jiro" }];
  return (
    <section>
      <Person person={friends[0]}>
        <p>good man</p>
      </Person>
      <Person person={friends[1]} />
      <Person person={friends[2]} />
    </section>
  );
}

const Person = props => {
  const { name } = props.person;
  const { children } = props;

  return (
    <div>
      <h1>{name}</h1>
      {children}
    </div>
  );
};

ReactDOM.render(<People />, document.getElementById("root"));
