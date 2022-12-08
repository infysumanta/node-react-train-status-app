require("dotenv").config();
const app = require("./app");
const config = require("./config");

app.listen(config.PORT, (error) => {
  if (error) console.log(`Something went wrong ${error}`);
  console.log(`Server running at ${config.PORT}`);
});
