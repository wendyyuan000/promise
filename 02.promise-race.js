var promise1 = new Promise(function(resolve, reject) {
    setTimeout(resolve, 500, 'one');
});

var promise2 = new Promise(function(resolve, reject) {
    setTimeout(resolve, 100, 'two');
});

Promise.race([promise1, promise2]).then(function(value) {  //race 谁先执行完就输出谁
  console.log(value);
  // Both resolve, but promise2 is faster  
});
// expected output: "two"