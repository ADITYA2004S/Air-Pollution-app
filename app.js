import express from "express";
const app = express();

app.set("view engine", "ejs");
app.use(express.static("public"));

// app.get("/", (req, res) => {
//   res.send("hello");
// });

app.get("/", (req, res) => {
  res.render("navbar.ejs");
});

app.get("/footer", (req, res) => {
  res.render("footer.ejs");
});

app.listen(3000, () => {
  console.log("server is active at 3000");
});
