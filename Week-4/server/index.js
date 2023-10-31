const express = require("express");
const app = express();
const port = 3000;
const path = require("path");

app.use(express.static("public"));

app.get("/cars", (req, res) => {
  const options = {
    root: path.join(__dirname, "..", "public"),
    dotfiles: "deny",
    headers: {
      "x-timestamp": Date.now(),
      "x-sent": true,
    },
  };

  res.sendFile("car.html", options);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
