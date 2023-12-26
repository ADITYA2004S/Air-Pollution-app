import request from "request";
import bodyParser from "body-parser";
import express from "express";
const app = express();

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

// app.get("/", (req, res) => {
//   res.send("hello");
// });

app.get("/", (req, res) => {
  res.render("navbar.ejs");
});

app.get("/footer", (req, res) => {
  res.render("footer.ejs");
});

app.post("/result", (req, res) => {
  var city = req.body.city;
  request.get(
    {
      url: "https://api.api-ninjas.com/v1/airquality?city=" + city,
      headers: {
        "X-Api-Key": "10S8GL9Atf6VN5aNPrfTT7zT4e3LfvsxhljAOaIR",
      },
    },
    function (error, response, body) {
      var data = JSON.parse(body);
      var aqi = data.overall_aqi;
      console.log(aqi);
      res.write("<h1>" + city + " " + "</h1>");
      res.write("<p> AQI is " + aqi + "</p>");
      res.send();
    }
  );
});

app.listen(3000, () => {
  console.log("server is active at 3000");
});
