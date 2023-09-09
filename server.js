const express = require("express");
const app = express();

//In-built middle for converting json to js object and mkae it available as req.body
app.use(express.json());

//Stitch the app with routes
//Stitch the app with routes
require("./routes/idea.routes")(app);

//Starting the server
app.listen(8080, () => {
  console.log("Server started at port 8080");
});
