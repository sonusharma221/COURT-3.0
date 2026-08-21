let express = require("express");
let app = express();
app.use(express.json());

let users = [];

//post-create
app.post("/create", (req, res) => {
  let body = req.body;
  users.push(body);
  // res.send(users)
  res.send("user saved successfully");
});

//get-Read
app.get("/", (req, res) => {
  res.send(users);
});

//update
app.put("/update/:id", (req, res) => {
  let { id } = req.params;
  let { name } = req.body;

  let updatedUser = users.map((val) =>
    val.id === id ? { ...val, name } : val,
  );
  res.send(updatedUser);
});

//delete
app.delete("/delete/:id", (req, res) => {
  let { id } = req.params;
  let userData = users.filter((val) => val.id !== id);
  users = userData;
  res.send(users);
  //   res.send("user delete successfully")
});

let port = 3000;
app.listen(port, () => {
  console.log(`server running on ${port}`);
});
