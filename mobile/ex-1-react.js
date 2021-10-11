/*
Only for React
Render a list of the people name on screen,
then display the rest of the person info when the name is clicked.
Complexity: Easy
*/


import React from 'react';

const getMockData = async () => {
  return [
    { id:1, name:"Hedi", email:"hcosson0@umn.edu", age:49 },
    { id:2, name:"Thorny", email:"tcolumbine1@ask.com", age:59 },
    { id:3, name:"Erica", email:"emacia2@businessweek.com", age:78 },
    { id:4, name:"Tracey", email:"tmclennan3@xrea.com", age:28 },
    { id:5, name:"Eloise", email:"evallow4@indiatimes.com", age:56 },
    { id:6, name:"Gardener", email:"gmcglaud5@squarespace.com", age:82 },
    { id:7, name:"Durward", email:"dshaefer6@vinaora.com", age:86 },
    { id:8, name:"Parker", email:"pfelstead7@msn.com", age:97 },
    { id:9, name:"Chris", email:"cabba8@purevolume.com", age:13 },
    { id:10, name:"Corbet", email:"clarive9@purevolume.com", age:80 }
  ];
}

const App = () => {
  return (
    <div>
      Hola
    </div>
  )
}

export default App;
