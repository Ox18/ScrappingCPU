function controller() {
	const header = [];
	const ListCPU = [];

	const list = document.querySelector("#cputable");
	const listHead = list.children[0].children[0].children;

	for (const listHeadItem of listHead) {
		header.push(listHeadItem.children[0].innerText.replace("\n", " "));
	}

	const listBody = list.children[1].children;

	for (const listItem of listBody) {
		const cells = listItem.innerText.split("\t");
		let cpu = {};

		cells.forEach((element, index) => {
			cpu = { ...cpu, [header[index]]: element };
		});

		ListCPU.push(cpu);
	}

	return {
		header,
		ListCPU,
	};
}

module.exports = controller;
