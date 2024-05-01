Promise.all([promiseA, promiseB, promiseC, promiseD])
  .then((res) => {
    console.log(res);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {});
