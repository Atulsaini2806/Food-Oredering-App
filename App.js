import React from "react";
import ReactDOM from "react-dom/client";

const parent = React.createElement(
  "div",
  { id: "parent" },
  [
    React.createElement(
      "div",
      { id: "child", key: "child1" }, // outer key 
      [
        React.createElement("h1", { key: "h1a" }, "My name is Atul!"), // inner keys 
        React.createElement("h2", { key: "h2a" }, "I am h2 tag!")
      ]
    ),
    React.createElement(
      "div",
      { id: "child", key: "child2" }, // outer key 
      [
        React.createElement("h1", { key: "h1b" }, "I am h1 tag!"),
        React.createElement("h2", { key: "h2b" }, "I am h2 tag!")
      ]
    )
  ]
);

console.log(parent); // object

const root = ReactDOM.createRoot(document.getElementById("react-root"));
root.render(parent);

//This is  how core react works behind the scenes.
//React is just a library to create objects which are then converted to HTML tags and put into DOM by ReactDOM.
//It is just a library not a fremework like angular . because it works only with samll potion of html code(like header or footer or inside div)
       //not with entire html code like angular.