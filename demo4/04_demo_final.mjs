function asyncExecutor(what, when) {
	return new Promise(
		(resolve, reject) => {
			setTimeout(
				() => { resolve(what()); },
				when);
		});
}

console.log("> before then");

asyncExecutor(() => 'data resolved', 1000).then(
	(value) => { // successCallback
		console.log(`"${value}"`); // expected output: "data resolved"
	},
	(err) => { // failureCallback
	});

console.log("> after then");

