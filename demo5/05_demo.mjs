function asyncExecutor(what, when) {
	return new Promise(
		(resolve, reject) => {
			setTimeout(
				() => { resolve(what()); },
				when);
		});
}

console.log("> before then");

// TODO: refactor to async/await
asyncExecutor(() => 'data resolved', 1000).then(
	(value) => {
		console.log(`"${value}"`);
	});

console.log("> after then");

