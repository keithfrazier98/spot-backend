const { PORT = 5000 } = process.env;

const app = require("./app.js");

app.listen(PORT, listener);
  
function listener() {
  console.log(`Listening on port ${PORT}`);
}
