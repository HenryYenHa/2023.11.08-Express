const express = require("express");
const app = express();
// const app2 = express(); // This would make a second server, but this is terrible practice

//TO USE THIS, rename this to server.js
//Then run node server.js to have it listen

// USE res.send() primarily*************************************************************************************************

/***********/
/* .send() */
/***********/

// Text -> text/html
app.get("/send/text", (req, res) => {
  res.send("hello world");
});

// HTML -> text/html
app.get("/send/html", (req, res) => {
  res.send("<p>hello world</p>");
});

// JSON -> application/json
app.get("/send/json", (req, res) => {
  res.send({ hello: "world" });
});

/***********/
/* .json() */
/***********/

// JSON -> application/json
app.get("/json/json", (req, res) => {
  res.json({ hello: "world" });
});
// HTML -> application/json  -- this is strange
app.get("/json/html", (req, res) => {
  res.json("<p>hello world</p>");
});

/***********/
/* .end() */
/***********/

// Text --> No `Content-Type`  -- strange
app.get("/end/text", (req, res) => {
  res.end("hello world");
});

// HTML --> No `Content-Type`  -- strange, don't do this
app.get("/end/html", (req, res) => {
  res.end("<p>hello world</p>");
});

// JSON --> text/html  -- strange, don't do this
app.get("/end/json", (req, res) => {
  res.end({ hello: "world" });
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, function () {
  console.log(`V3: Listening on port ${PORT}.`);
});
