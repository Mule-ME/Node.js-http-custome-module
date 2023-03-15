const { encDecKey } = require("./encDecKey");

const decrypt = (data) => {
  const decryptionKey = encDecKey;
  const inputData = data.toString();

  let decryptionKeys = [];
  for (let i = 0; i < inputData.length; i++) {
    let decryptionKeyIndexes = "";
    decryptionKeyIndexes +=
      inputData.includes(decryptionKey[i]) &&
      inputData.indexOf(decryptionKey[i]);
    decryptionKeys.push(inputData[decryptionKeyIndexes]);
  }
  const inputDataHolder = inputData.split("");
  const decryptionKeysArray = decryptionKeys.filter((key) => key != undefined);

  const result = inputDataHolder
    .filter((input) => decryptionKeysArray.indexOf(input) === -1)
    .toString();
  console.log(decryptionKeysArray, inputDataHolder);

  return result;
};
// decrypt("Mtuwlrueaulqecm");

const read = (url, data) => {
  const decryptData = decrypt(data);
  console.log(
    `You have got the response from ${url} and the response is ${decryptData}`
  );
};

module.exports = { read };
