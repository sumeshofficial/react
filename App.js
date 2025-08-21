import React from 'react';
import ReactDOM from 'react-dom/client';

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "This is react"),
    React.createElement("h2", {}, "Hello I'am h2"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "Hello I'am h1"),
    React.createElement("h2", {}, "Hello I'am h2"),
  ]),
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(parent);
console.log(parent);
