const nums = [];
const reversed_nums = [];

for (let i = 0; i < 5; i++) {
	let num = prompt(`Enter a number (${i + 1}): `);
	nums.push(num);
}

for (let j = nums.length; j !== 0; j--) {
	let num_idx = j - 1;
	reversed_nums.push(nums[num_idx]);
}

for (let k = 0; k < reversed_nums.length; k++) {
	console.log(reversed_nums[k]);
}
