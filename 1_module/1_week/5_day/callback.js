function forEach(cb) {
  console.log(cb);
  for (let i = 0; i < 3; i++) {
    cb(element,index,array);
  }
  //   console.log("I am main functon");
}

function passedAsCallback(element,index,array) {
//   console.log(index);
  console.log("I'm passed as callback");
}


myFunction(passedAsCallback);

// myFunction(function(index){
//     console.log(index);
// });
