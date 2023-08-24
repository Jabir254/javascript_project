fetch(`https://api.github.com/users/jabir254`)
 .then(response => response.json())
 .then(console.log)
 .catch(console.error);
