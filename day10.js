// a = 5;
// b = 6;
// async function val(a, b) {
//   return a + b;
// }
// var temp = val(a, b);
// temp.then((l) => console.log(l));
// //
const promise = new Promise(function (resolve, reject) {
  const x = "Mazhar";
  const y = "Mazhar";
  if (x === y)
    setTimeout(function () {
      resolve();
    }, 3000);
  else {
    reject();
  }
});
promise
  .then(function () {
    console.log("Success, You are a good Progrmmer");
  })
  .catch(function () {
    console.log("Some Error ");
  });
