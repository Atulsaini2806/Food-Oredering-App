///notes:- const reactHeading = React.createElement('h1', {}, "Hello World! from React");
//{} is where we can pass attributes like id, className etc
//if we want to pass attributes then we can do it like this:-


        //      const reactHeading = React.createElement('h1', {id:"heading"}, "Hello World! from React");
        //      console.log(reactHeading);//object
        //       // we have to pass this object to the DOM

        //      const root1 = ReactDOM.createRoot(document.getElementById("react-root"));
        //     root1.render(reactHeading);
      //this render basically takes this object and converting it into h1 tag and putting into dom.


// /*
// *
// *<div id = "parent">
// *   <div id = "child">
// *       <h1>i am h1 tag</h1>
//         <h2>i am h2 tag</h2>
// *   </div>
// *</div>
// *
// */
// //If we have nested type of structure then we can do it like this:-
// const parent = React.createElement(
//     "div", 
//     {id: 'parent'},
//     React.createElement("div", {id: 'child'},[
//         React.createElement("h1", {}, "I am h1 tag!"),
//         React.createElement("h2", {}, "I am h2  tag!")
//     ])
// );
// console.log(parent);//object
// const root = ReactDOM.createRoot(document.getElementById("react-root"));
// root.render(parent);



/*
*
*<div id = "parent">
*   <div id = "child">
*       <h1>i am h1 tag</h1>
        <H2>i am h2 tag</H2>
*   </div>
 <div id = "child">
*       <h1>i am h1 tag</h1>
        <h2>i am h2 tag</h2>
*   </div>
*</div>
*
*/
//if we have nested type of structure then we can do it like this:-
const parent = React.createElement(
    "div", 
    {id: 'parent'},
   [ React.createElement( "div",{id: 'child'},[
        React.createElement("h1", {}, "I am h1 tag!"),
        React.createElement("h2", {}, "I am h2  tag!")
    ]),
     React.createElement( "div",{id: 'child'},[
        React.createElement("h1", {}, "I am h1 tag!"),
        React.createElement("h2", {}, "I am h2  tag!")
    ])]
);
console.log(parent);//object
const root = ReactDOM.createRoot(document.getElementById("react-root"));
root.render(parent);

//This is  how core react works behind the scenes.
//React is just a library to create objects which are then converted to HTML tags and put into DOM by ReactDOM.
//It is just a library not a fremework like angular . because it works only with samll potion of html code(like header or footer or inside div)
       //not with entire html code like angular.