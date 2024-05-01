const startService = (callback) => {
  const randomTime = Math.random() * 3 * 1000;
  setTimeout(() => {
    console.log("startService");
    if (callback) {
      callback();
    }
  }, randomTime);
};
const readData = (callback) => {
  const randomTime = Math.random() * 3 * 1000;
  setTimeout(() => {
    console.log("readData");
    if (callback) {
      callback();
    }
  }, randomTime);
};
const sendMessage = (callback) => {
  const randomTime = Math.random() * 3 * 1000;
  setTimeout(() => {
    console.log("sendMessage");
    if (callback) {
      callback();
    }
  }, randomTime);
};
const logInfo = (callback) => {
  const randomTime = Math.random() * 3 * 1000;
  setTimeout(() => {
    console.log("logInfo");
    if (callback) {
      callback();
    }
  }, randomTime);
};
new Promise((res) => {
  startService(res);
})
  .then(() => {
    return new Promise((res) => {
      readData(res);
    });
  })
  .then(() => {
    return new Promise((res) => {
      sendMessage(res);
    });
  })
  .then(() => {
    return new Promise((res) => {
      logInfo(res);
    });
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {});
