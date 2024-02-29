async function headers() {
  let response = await fetch(
    "https://api.github.com/repos/javascript-tutorial/en.javascript.info/commits"
  );

  //get one header
  console.log(response.headers.get("Content-Type"));

  //iterate over all and console log
  for (let [key, value] of response.headers) {
    console.log(`${key} = ${value}`);
  }
}

headers();
