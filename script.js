$(document).ready(function () {

    $(window).scroll(function () {

        var height = $('.home').height();
        var scrollTop = $(window).scrollTop();

        if (scrollTop >= 40) {
            $('.navbar-scroll').addClass('affix');
            $('.navbar-scroll').addClass('bg-dark');
        } else {
            $('.navbar-scroll').removeClass('solid-nav');
            $('.navbar-scroll').removeClass('affix');
            $('.navbar-scroll').removeClass('bg-dark');
        }

    });
});

//*jshint esversion: 6 */

// ----------required packages---------//
const express = require("express");
const request = require("request");
const bodyParser = require("body-parser");
const https = require("https");

// new instance of express
const app = express();


app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function (req, res) {
    res.sendFile(__dirname + "/index.html");
});

app.post("/", function (req, res) {
    const email = req.body.email;
    const data = {
        //the members, status,merge_fields ---comes from mailChimp api
        'members': [
            {
                email_address: email,
                status: "subscribed",
            }
        ],
    }
    var jsonData = JSON.stringify(data)

    console.log(email);


    var jsonData = JSON.stringify(data);
    const url = "https://us2.api.mailchimp.com/3.0/lists/abacdefghijk";

    const options = {
        method: "POST",
        auth: ""
    }

    const request = https.request(url, options, function (response) {

        response.on("data", function (data) {
            console.log(JSON.parse(data));
        })
    })

    request.write(jsonData);
    request.end();
});


app.post("/failure", function (req, res) {
    res.redirect("/");
});

//to test the app locally in port 3000
// app.listen(process.env.PORT || 3000, function(){
// app.listen(process.env.PORT || 3000, function () {
//     console.log("Server is running in port 3000")
// });
