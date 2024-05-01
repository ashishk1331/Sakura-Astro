export function captilize(str) {
	return str
		.split()
		.map((word) => word[0].toUpperCase() + word.substring(1))
		.join(" ");
}
