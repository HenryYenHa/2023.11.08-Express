const express = require("express");
const app = express();
app.use(express.urlencoded({ extended: true })); //This middleware will look for form submission headers and add the data to request.body. This assumes data was submitted using a traditional submit button (i.e. not using Javascript to submit json) or a POST request sent using an application such as Postman.

app.get("/", (request, response) => {
  response.send("Hello World!");
});

const PORT = process.env.PORT || 3000;

app.post("/", function (request, response) {
  response.json(request.body);
});

app.listen(PORT, function () {
  console.log(`Example app listening at http://localhost:${PORT}`);
});
