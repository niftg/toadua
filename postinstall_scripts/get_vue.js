const fs = require("fs"),
	req = require("https");

const vue_url = "https://vuejs.org/js/vue.min.js",
	output = fs.createWriteStream("./vue-production.js");//download to cwd

req.get(vue_url, (res) => {
	res.pipe(output)
	.on("error", (err) => console.log(err))
	.on("end", () => {
		output.close();
		console.log("Vue has been downloaded successfully.");
	});
});
