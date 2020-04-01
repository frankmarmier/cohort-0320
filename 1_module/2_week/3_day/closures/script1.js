// export function myClosure() {
//   let name = "Another Toto";
//   //
//   function foo() {
//     name += "Heyyy";
//   }

//   function getName() {
//     return name;
//   }

//   return {
//     getName,
//     foo
//   };
// }

function myModule() {
  let publicInfo = "I like cats.";
  let privateInfo = "I actually love turtles.";
  let secretCode = "12345";

  function getPublicInfo() {
    return publicInfo;
  }

  function getPrivateInfo(password) {
    if (password === secretCode) {
      return privateInfo;
    } else {
      return `Access Denied...`;
    }
  }

  return {
    getPublicInfo,
    getPrivateInfo
  };
}

let userInfo = myModule();

const userPublicInformation = userInfo.getPublicInfo();
console.log(userPublicInformation);
const userPrivateInformation = userInfo.getPrivateInfo("12345")
console.log(userPrivateInformation);
// export let name = "Heyyy i'm toto";
