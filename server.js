const express = require("express");
const axios = require("axios");
const cheerio = require('cheerio');

const app = express();

const port = 8443;

app.set("port", port);

let result;

const getHtml = async () => {
	try {
		return await axios.get('https://news.naver.com');
	}catch (error) {
		console.error(error);
	}
};

getHtml().then( (html) =>{
	const $ = cheerio.load(html);
	const data = $('div').text();
	return data;
})
.then( (res) => result = res);

app.get("/", (req, res) => {
	res.send("test");
});

app.listen(port, () => console.log("Listening on", port));

module.exports = app;
