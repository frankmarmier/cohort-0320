const url =
  "https://gist.githubusercontent.com/mshafrir/2646763/raw/8b0dbb93521f5d6889502305335104218454c2bf/states_hash.json";

const filterInput = document.getElementById("input");

// Solution n°1

let myVariableThatWillChange = "foo";

axios
  .get(url)
  .then(HTTPSuccess => {
    const states = Object.values(HTTPSuccess.data);
    displayStates(states);
    filterInput.oninput = function(event) {
      //   console.log(event);
      const inputValue = event.target.value;
      const filteredStates = states.filter(state => {
        return state.toLowerCase().includes(inputValue.toLowerCase());
      });
      displayStates(filteredStates);
    };
  })
  .catch(HTTPError => {
    console.log(HTTPError);
  });

function displayStates(states) {
  const list = document.getElementById("list");
  list.innerHTML = "";
  states.forEach(state => {
    list.innerHTML += `<li>${state}</li>`;
  });
}

// Solution n°2

// axios
//   .get(url)
//   .then(HTTPSuccess => {
//     const states = Object.values(HTTPSuccess.data);
//     displayStates(states);
//     // myVariableThatWillChange = "bar";
//     filterInput.oninput = handleWithAClosure(states);
//   })
//   .catch(HTTPError => {
//     console.log(HTTPError);
//   });

// // console.log(myVariableThatWillChange);

// function displayStates(states) {
//   const list = document.getElementById("list");
//   list.innerHTML = "";
//   states.forEach(state => {
//     list.innerHTML += `<li>${state}</li>`;
//   });
// }

// // Solution n°2

// function handleWithAClosure(states) {
//   return function handler(event) {
//     const filteredStates = states.filter(state => {
//       return state.toLowerCase().includes(event.target.value.toLowerCase());
//     });
//     displayStates(filteredStates);
//   };
// }

// function handleInput(event) {
//   //   console.log(event);
//   const inputValue = event.target.value;
//   const filteredStates = states.filter(state => {
//     return state.toLowerCase().includes(inputValue.toLowerCase());
//   });
//   displayStates(filteredStates);
// }
