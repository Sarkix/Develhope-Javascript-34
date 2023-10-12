function printAsyncName(callback, name) {
  setTimeout(function () {
    callback();
    setTimeout(function () {
      console.log(name);
    }, 2000);
  }, 1000);
}

function sayHello() {
  console.log("Hello");
}

printAsyncName(sayHello, "Sara");
