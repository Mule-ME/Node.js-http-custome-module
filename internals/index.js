const request = require("./request");
const response = require("./response");

module.exports = {
  REQUEST_TIMEOUT: request.REQUEST_TIMEOUT,
  send: request.send,
  read: response.read,
};

//OR we can access it using ...(spread operator) but it looks fancy

// module.exports = {
//   ...require("./request"),
//   ...require("./response"),
// };
