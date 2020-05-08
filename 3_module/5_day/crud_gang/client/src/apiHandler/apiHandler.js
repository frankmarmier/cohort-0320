import axios from "axios";

// With a class

// class apiHandler {
//   constructor() {
//     this.service = axios.create({
//       baseURL: process.env.REACT_APP_BACKEND_URL,
//     });
//   }

//   get(endPoint) {
//     return this.service.get(endPoint);
//   }

//   post(endPoint, data) {
//     return this.service.post(endPoint, data);
//   }
//   patch() {}
//   delete() {}
// }

// export default apiHandler;

// With an object

const service = axios.create({
  baseURL: process.env.REACT_APP_BACKEND_URL,
});

function get(endPoint) {
  return service.get(endPoint);
}

function post(endPoint, data) {
  return service.post(endPoint, data);
}

function patch(endPoint, data) {
  return service.patch(endPoint, data);
}

function remove(endPoint) {
  return service.delete(endPoint);
}

export default {
  get,
  post,
  remove,
  patch,

  //   get: function (endPoint) {
  //     return service.get(endPoint);
  //   },
  //   post: function (endPoint, data) {
  //     return service.post(endPoint, data);
  //   },

  //   get: (endPoint) => service.get(endPoint),
  //   post: (endPoint, data) => service.get(endPoint, data),
};
