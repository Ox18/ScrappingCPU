const app = require("./app");

const singleController = require("./controller/single-data-controller");
const multipleController = require("./controller/multiple-data-controller");

const URL = "https://www.cpubenchmark.net/cpu_list.php";

(async () => {
	await app(URL, singleController, "single");
	await app(URL, multipleController, "multiple");
})();
