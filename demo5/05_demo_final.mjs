function asyncExecutor(what, when) {
	return new Promise(
		(resolve, reject) => {
			setTimeout(
				() => { resolve(what()); },
				when);
		});
}

console.log("> before then");

async function resolveData() {
	const result = await asyncExecutor(() => 'data resolved', 1000);
	console.log(`"${result}"`); // expected output: "data resolved"
}

resolveData();

console.log("> after then");

