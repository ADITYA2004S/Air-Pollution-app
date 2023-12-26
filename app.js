import request from "request";
import bodyParser from "body-parser";
import express from "express";
const app = express();

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("navbar.ejs");
});

app.get("/footer", (req, res) => {
  res.render("footer.ejs");
});
app.get("/body", (req, res) => {
  res.render("main-body.ejs");
});

// ------------------------------API Connection-------------------------------------------//

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
      var NO2 = data.NO2.concentration;
      var PM10 = data.PM10.concentration;
      var SO2 = data.SO2.concentration;
      console.log(aqi);
      console.log(NO2);
      console.log(PM10);
      console.log(SO2);
      res.write("<h1>" + city + " " + "</h1>");
      res.write("<p> NO2 concentration is " + NO2 + "</p>");
      res.write("<p> PM10 concentration is " + PM10 + "</p>");
      res.write("<p> SO2 concentration is " + SO2 + "</p>");
      res.write("<p> AQI is " + aqi + "</p>");
      res.send();
    }
  );
});
//-----------------------------------------------------------------------------------------//

app.listen(3000, () => {
  console.log("server is active at 3000");
});
