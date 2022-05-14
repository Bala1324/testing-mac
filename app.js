const express = require("express");

const app = express();
//scvdjvcwyvsghcvjdwvchjgdcwvcjdhcgrbfrwguibr3hfughrverhf3kgri7uy543hlbjvchjewvjewhvwvekv
app.post("/tamizh", (req, res) => {
  if (req.query.name) {
    return res.json({ status: "sucess!", data: req.query.name });
  } else {
    return res.json({ status: "failed!", data: "name not found!" });
  }
});

app.listen(7000, () => {
  console.log("localhost created!");
});
