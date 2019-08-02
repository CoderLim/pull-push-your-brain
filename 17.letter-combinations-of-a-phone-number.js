function convertNumersToCombinations(str) {
	const nums = str.split('');
	const map = {
		2: ['a', 'b', 'c'],
		3: ['d', 'e', 'f'],
		4: ['g', 'h', 'i'],
		5: ['j', 'k', 'l'],
		6: ['m', 'n', 'o'],
		7: ['p', 'q', 'r', 's'],
		8: ['t', 'u', 'v'],
		9: ['w', 'x', 'y', 'z'],
	};

	const paths = [];
	let maps = nums.map(n => map[n]);

	function traverse(level, path) {
		if (level === maps.length) {
			paths.push(path);
			return;
		}
		const chars = maps[level];
		const len = chars.length;
		for (let i = 0; i < len; i++) {
			traverse(level+1, path + chars[i]);
		}
	}

	traverse(0, []);
	return paths;
}

convertNumersToCombinations("23");
