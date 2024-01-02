import request from "request";
import bodyParser from "body-parser";
import express from "express";
const app = express();

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.static("javaScript"));
app.use(bodyParser.urlencoded({ extended: true }));

// Dont expose the varibales here -> hackable
var aqi;
var NO2;
var SO2;
var PM10;
var city;

app.get("/", (req, res) => {
  res.render("home.ejs");
});

app.get("/footer", (req, res) => {
  res.render("footer.ejs");
});
app.get("/body", (req, res) => {
  res.render("main-body.ejs");
});
app.get("/AQI", (req, res) => {
  res.render("AQI", { aqi: aqi, NO2: NO2, SO2: SO2, PM10: PM10, city: city });
});
// ------------------------------API Connection-------------------------------------------//

//-----------------------------------------------------------------------------------------//

app.post("/result", (req, res) => {
  city = req.body.cityname;

  request.get(
    {
      url: "https://api.api-ninjas.com/v1/airquality?city=" + city,
      headers: {
        "X-Api-Key": "10S8GL9Atf6VN5aNPrfTT7zT4e3LfvsxhljAOaIR",
      },
    },
    function (error, response, body) {
      var data = JSON.parse(body);
      aqi = data.overall_aqi;
      PM10 = data.PM10.concentration;
      NO2 = data.NO2.concentration;
      SO2 = data.SO2.concentration;
      // console.log(aqi);
      // console.log(NO2);
      // console.log(PM10);
      // console.log(SO2);
      // res.write("<h1>" + city + " " + "</h1>");
      // res.write("<p> NO2 concentration is " + NO2 + "</p>");
      // res.write("<p> PM10 concentration is " + PM10 + "</p>");
      // res.write("<p> SO2 concentration is " + SO2 + "</p>");
      // res.write("<p> AQI is " + aqi + "</p>");
      // res.send();
      // console.log(aqi);

      res.redirect("/AQI");
    }
  );
});

app.listen(3000, () => {
  console.log("server is active at 3000");
});
