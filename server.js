const express = require("express");
const puppeteer = require('puppeteer');
const cheerio = require('cheerio');

const app = express();

const port = 8443;

app.set("port", port);

app.get("/", (req, res) => {
	res.send("TEST");
});

app.listen(port, () => console.log("Listening on", port));

module.exports = app;
