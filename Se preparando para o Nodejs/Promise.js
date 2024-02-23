const myPromise = new Promise((resolve, reject) => {
  if (1 + 1 === 2) {
    resolve("Sucesso!");
  } else {
    reject({
      message: "Falhou!",
    });
  }
});

myPromise
  .then((value) => {
    console.log(value);
  })
  .catch((value) => console.log(value.message));
