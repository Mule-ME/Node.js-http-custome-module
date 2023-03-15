const { encDecKey } = require("./encDecKey");

exports.REQUEST_TIMEOUT = 1000;

const encrypt = (data) => {
  const encryptionKey = encDecKey;
  const inputData = data.toString();

  let result = "";
  for (let i = 0; i < inputData.length; i++) {
    const encryption = encryptionKey.slice(0, inputData.length);
    result += inputData[i] + encryption[i];
  }
  return result;
};

const send = (url, data) => {
  const encryptedData = encrypt(data);
  console.log(`Sending  encrypted data  \n${encryptedData} \nto ${url}`);
};

module.exports = {
  send,
};
