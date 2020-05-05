import React, { Component } from "react";

export default class IdCard extends Component {
  render() {
    const { firstName, lastName, gender, birth, height, picture } = this.props;

    return (
      <div className="flex border margin-bottom">
        <img src={picture} alt="" />
        <div>
          <p>
            <span className="bold">First name:</span> {firstName}
          </p>
          <p>Last name: {lastName}</p>
          <p>Gender : {gender}</p>
          <p>Height : {height}</p>
          <p>Birth: {birth.toString().substr(0, 15)}</p>
        </div>
      </div>
    );
  }
}

// import React from "react";

// function IdCard({ firstName, lastName, birth, gender, picture, height }) {
//   return (
//     <div className="flex border margin-bottom">
//       <img src={picture} alt="" />
//       <div>
//         <p>
//           <span className="bold">First name:</span> {firstName}
//         </p>
//         <p>Last name: {lastName}</p>
//         <p>Gender : {gender}</p>
//         <p>Height : {height}</p>
//         <p>Birth: {birth.toString().substr(0, 15)}</p>
//       </div>
//     </div>
//   );
// }

// export default IdCard;
