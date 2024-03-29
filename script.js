//your JS code here. If required.
function updateText() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Hello, world!');
    }, 1000);
  });
}

updateText().then((message) => {
  document.getElementById('output').innerText = message;
});
