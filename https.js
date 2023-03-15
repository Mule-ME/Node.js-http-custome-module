const { send, read } = require("./internals");

const userRequest = (url, data) => {
  send(url, data);
  return read(url, data);
};

userRequest(
  "https://www.google.com",
  "What is the Generative Pre-trained Transformer "
);

// console.log(require.cache);
